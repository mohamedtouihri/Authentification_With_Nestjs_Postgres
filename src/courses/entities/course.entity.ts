import { CategoryEntity } from "src/categories/entities/category.entity";
import { UserEntity } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name:'courses'})
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    CourseName:string;
    @Column({ type:'decimal', precision:10, scale:2, default: 0 })
    CoursePrice:string;
    @Column('simple-array')
    CourseImg:string[];
    @Column()
    DescriptionCourse:string;
    @Column()
    UserNumber:number;
    @CreateDateColumn()
    createdAt:Timestamp;
    @UpdateDateColumn()
    updateAt:Timestamp;
    
    @ManyToOne(()=>UserEntity,(user)=>user.courses)
    addedBy:UserEntity;
    
    @ManyToOne(()=>CategoryEntity,(cat)=>cat.courses)
    category:CategoryEntity[]; 
}
