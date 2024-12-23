import { IsNotEmpty, IsString } from 'class-validator';
import { UserLogInDto } from './user-login.dto';

export class UserSignUpDto extends UserLogInDto {
  @IsNotEmpty({ message: 'First name cannot be null' })
  @IsString({ message: 'First name should be a string' })
  firstName: string;

  @IsNotEmpty({ message: 'Last name cannot be null' })
  @IsString({ message: 'Last name should be a string' })
  lastName: string;

  @IsNotEmpty({ message: 'Username cannot be null' })
  @IsString({ message: 'Username should be a string' })
  Username: string;

  @IsNotEmpty({ message: 'Password cannot be null' })
  @IsString({ message: 'Password should be a string' })
  password: string;

  @IsNotEmpty({ message: 'Confirm password cannot be null' })
  @IsString({ message: 'Confirm password should be a string' })
  confirmPassword: string;
}