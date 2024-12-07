import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CoursesService } from 'src/courses/courses.service';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(ReviewEntity) 
  private readonly reviewRepository:Repository<ReviewEntity>,
  private readonly courseService:CoursesService){}
  async create(createReviewDto: CreateReviewDto,currentUser:UserEntity) {
    const course = await this.courseService.findOne(createReviewDto.courseId);
    let review = await this.findOneByUserAndCourse(currentUser.id,createReviewDto.courseId);
    if(!review){
      review = this.reviewRepository.create(createReviewDto);
      review.user = currentUser;
      review.course = course;
    }else{
      review.rating=createReviewDto.ratings
    }
    return createReviewDto;
  }

  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
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
