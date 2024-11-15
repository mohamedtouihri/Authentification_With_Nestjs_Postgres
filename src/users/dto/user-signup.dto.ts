import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class UserSignUp{
  @IsNotEmpty({message:'Name can not be null'})
  @IsString({message:'Name should be string'})
  firstName:string;

  @IsNotEmpty({message:'Name can not be null'})
  @IsString({message:'Name should be string'})
  lastName:string;

  @IsNotEmpty({message:'Email can not be empty.'})
  @IsEmail({},{message:'Please provide a valid email.'})
  email:string;
  
  
  @IsNotEmpty({message:'Password can not be empty.'})
  @MinLength(5,{message:'Password minimum character should be 5.'})
  password:string;
}



