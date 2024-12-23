import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeedService } from './seed.service';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  providers: [SeedService],
})
export class SeedModule {}
