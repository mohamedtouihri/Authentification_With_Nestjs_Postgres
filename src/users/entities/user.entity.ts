import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from 'typeorm';
import { Roles } from 'src/utility/common/user-roles.enum';
import { CategoryEntity } from 'src/categories/entities/category.entity';

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
}
