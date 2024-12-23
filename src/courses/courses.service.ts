import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(CourseEntity) private readonly courseRepository:Repository<CourseEntity>,
  private readonly categoryService:CategoriesService){}
  async create(createCourseDto: CreateCourseDto
    ,currentUser:UserEntity):Promise<CourseEntity> {

    const category = await this.categoryService.findOne(
      +createCourseDto.categoryId,);
    const course = this.courseRepository.create(createCourseDto);   
    const courses = this.courseRepository.insert([
      
    ])
    course.category = category;
    course.addedBy=currentUser;
    return await this.courseRepository.save(course);
  }

  async 
  async findAll():Promise<CourseEntity[]> {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({
      where : { id : id },
      relations:{
        addedBy:true,
        category:true,
      },
      select:{
        addedBy:{
          id:true,
          firstName:true,
          lastName:true,
          Username:true,
          email:true,
        },
        category:{
          id:true,
          CourseName:true,
        }
      }
    });
    if(!course) throw new NotFoundException('course not found.');
    return course;
  }

  async update(id: number, 
    updateCourseDto:Partial<UpdateCourseDto>,
    currentUser:UserEntity,):Promise<CourseEntity>{
    const course = await this.findOne(id);
    Object.assign(course,updateCourseDto);
    course.addedBy = currentUser;
    if(updateCourseDto.categoryId){
      const category = await this.categoryService.findOne(
        +updateCourseDto.categoryId,
      );
      course.category = category;
    }
    return await this.courseRepository.save(course);
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
