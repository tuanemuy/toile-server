import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsInt, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  @ApiProperty()
  authId: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional()
  thubmnailId?: number;
}
