import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { Roles } from 'src/utility/common/user-roles.enum';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { CourseEntity } from 'src/courses/entities/course.entity';
import { ReviewEntity } from 'src/reviews/entities/review.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  Username: string;
  @Column({unique:true})
  email: string;
  @Column({select:false})
  password: string;
  @Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
  roles:Roles[];
  @CreateDateColumn()
  createAt:Timestamp;
  @UpdateDateColumn()
  updateAt:Timestamp;

  @OneToMany(()=>CategoryEntity,(cat)=>cat.addedBy)
  categories:CategoryEntity[]; 

  @OneToMany(()=>CourseEntity,(course)=>course.addedBy)
  courses:CourseEntity[];

  @OneToMany(()=>ReviewEntity,(rev)=>rev.user)
  reviews:ReviewEntity[];
}
