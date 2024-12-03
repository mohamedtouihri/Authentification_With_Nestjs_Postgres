import { UserEntity } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({name:'categories'})
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    CourseName:string;
    @Column()
    DescriptionCourse:string;
    @CreateDateColumn()
    createdAt:Timestamp;
    @UpdateDateColumn()
    updateAt:Timestamp;
    @ManyToOne(()=>UserEntity,(user)=>user.categories)
    addedBy:UserEntity;
}

