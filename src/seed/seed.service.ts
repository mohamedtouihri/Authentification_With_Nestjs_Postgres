import { Injectable } from '@nestjs/common';
import { CourseEntity } from '../courses/entities/course.entity';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const CourseImg =
  'http://localhost:3000/public/Assets/Images/CourseList/Course_Developement.png';

/*how to serve files from server*/
/*foler public bara mu source*/
/*persist volumes fi docker*/

@Injectable()
export class SeedService {
  create(createSeedDto: CreateSeedDto) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateSeedDto: UpdateSeedDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(CourseEntity)
    private courseRepository: Repository<CourseEntity>,
  ) {}

  async runSeed() {
    const courseCards = [
      {
        id: 1,
        CourseName: 'IT & Software',
        CoursePrice: '16',
        CourseImg: [CourseImg],
        DescriptionCourse: 'Learn Python Programming Masterclass',
        UserNumber: 211434,
      },
      {
        id: 2,
        CourseName: 'Design',
        CoursePrice: '50',
        CourseImg: [CourseImg],
        DescriptionCourse:
          'Complete Blender Creator: Learn 3D Modelling for Beginners',
        UserNumber: 211434,
      },
      {
        id: 3,
        CourseName: 'Developments',
        CoursePrice: '3',
        CourseImg: [CourseImg],
        DescriptionCourse: 'Adobe Premiere Pro CC - Advanced Training Course',
        UserNumber: 211434,
      },
      {
        id: 4,
        CourseName: 'Marketing',
        CoursePrice: '8',
        CourseImg: [CourseImg],
        DescriptionCourse:
          'Ultimate AWS Certified Solutions Architect Associate 2021',
        UserNumber: 211434,
      },
    ];
    await this.courseRepository.clear();

    for (const course of courseCards) {
      const newCourse = this.courseRepository.create({
        CourseName: course.CourseName,
        CoursePrice: course.CoursePrice,
        CourseImg: course.CourseImg,
        DescriptionCourse: course.DescriptionCourse,
        UserNumber: course.UserNumber,
      });
      await this.courseRepository.save(newCourse);
    }
  }
}
