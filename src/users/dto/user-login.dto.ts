import { IsNotEmpty, IsEmail, IsString, Matches } from 'class-validator';

export class UserLogInDto{
  @IsNotEmpty({message:'Email can not be empty.'})
  @IsEmail({},{message:'Please provide a valid email.'})
  email:string;
  
  @IsNotEmpty({message:'Password can not be empty.'})
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    {message:"Must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
  })
  password: string;
}

