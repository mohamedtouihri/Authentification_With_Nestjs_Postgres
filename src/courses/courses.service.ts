import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from 'src/categories/categories.service';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectRepository(CourseEntity) private readonly courseRepository:Repository<CourseEntity>,
  private readonly categoryService:CategoriesService
){}
  async create(createCourseDto: CreateCourseDto,currentUser:UserEntity):Promise<CourseEntity> {

    const category = await this.categoryService.findOne(+createCourseDto.categoryId,);
    const course = this.courseRepository.create(createCourseDto);
    course.category=category;
    course.addedBy=currentUser;
    return await this.courseRepository.save(course);
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
