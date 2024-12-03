import { IsNotEmpty, IsEmail, MinLength, IsString, Matches } from 'class-validator';

export class UserLogInDto{
  @IsNotEmpty({message:'Email can not be empty.'})
  @IsEmail({},{message:'Please provide a valid email.'})
  email:string;
  
  @IsNotEmpty({message:'Password can not be empty.'})
  @IsString()
  password: string;
}

