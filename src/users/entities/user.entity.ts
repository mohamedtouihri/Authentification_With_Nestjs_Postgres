import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Roles } from 'src/utility/common/user-roles.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
  roles:Roles[]
}
