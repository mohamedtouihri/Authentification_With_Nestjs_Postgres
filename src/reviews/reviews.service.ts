import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CoursesService } from 'src/courses/courses.service';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(ReviewEntity) 
  private readonly reviewRepository:Repository<ReviewEntity>,
  private readonly courseService:CoursesService){}
  async create(createReviewDto: CreateReviewDto,currentUser:UserEntity):Promise<ReviewEntity>{
    const course = await this.courseService.findOne(createReviewDto.courseId);
    let review = await this.findOneByUserAndCourse(currentUser.id,createReviewDto.courseId);
    const newReview: DeepPartial<ReviewEntity> = {
      rating: createReviewDto.ratings,
      user: currentUser,
      course: course,
    };
    if (!review) {
      review = this.reviewRepository.create(newReview);
    }else{
      review.rating=createReviewDto.ratings
    }
    return await this.reviewRepository.save(review);
  }

  findAll() {
    return `This action returns all reviews`;
  }
  async findAllByCourse(id:number): Promise<ReviewEntity[]>{
    const course = await this.courseService.findOne(id);
    return await this.reviewRepository.find({
      where:{course:{id}},
      relations:{
        user:true,
        course:{
          category:true
        }
      }
    })
  }

  async findOne(id: number): Promise<ReviewEntity>{
    const review = await this.reviewRepository.findOne({
      where:{id},
      relations:{
        user:true,
        course:{
          category:true
        }
      }
    })
    if(!review) throw new NotFoundException('Review not found.');
    return review;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.reviewRepository.remove(review);
  }

  async findOneByUserAndCourse(userId:number,courseId:number){
    return await this.reviewRepository.findOne({
      where:{
        user:{
          id:userId,
        },
        course:{
          id:courseId,
        },
      },
      relations:{
        user:true,
        course:{
          category:true,
        }
      }
    })
  }
}