import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { CourseEntity } from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports:[TypeOrmModule.forFeature([CourseEntity]),CategoriesModule],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports:[CoursesService]
})
export class CoursesModule {}
