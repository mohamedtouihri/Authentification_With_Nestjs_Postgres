import { IsNotEmpty, IsString } from 'class-validator';
import { UserLogInDto } from './user-login.dto';

export class UserSignUpDto extends UserLogInDto{
  @IsNotEmpty({message:'Name can not be null'})
  @IsString({message:'Name should be string'})
  firstName:string;

  @IsNotEmpty({message:'Name can not be null'})
  @IsString({message:'Name should be string'})
  lastName:string;
}



