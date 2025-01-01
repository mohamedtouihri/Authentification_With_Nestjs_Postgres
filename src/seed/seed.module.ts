import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [SeedService],
})
export class SeedModule {}
