import { CourseEntity } from 'src/courses/entities/course.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'reviews' })
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @CreateDateColumn()
  createdAt:Timestamp;

  @UpdateDateColumn()
  updatedAt:Timestamp;

  @ManyToOne(type=>UserEntity,(user)=>user.reviews)
  user:UserEntity;

  @ManyToOne(type=>CourseEntity,(course)=>course.reviews)
  course:CourseEntity;
}
