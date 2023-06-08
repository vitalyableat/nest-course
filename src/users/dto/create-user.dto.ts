import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'olivertears@gmail.com', description: 'user email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'Password length should be between 4 and 16' })
  readonly password: string;
}
