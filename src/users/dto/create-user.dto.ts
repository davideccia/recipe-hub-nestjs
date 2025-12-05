import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsEnum(['admin', 'user'], {
    message: 'Value role required',
  })
  @IsString()
  role: string;
}
