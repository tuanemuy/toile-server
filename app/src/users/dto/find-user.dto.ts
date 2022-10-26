import { ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsInt, IsIn } from 'class-validator';

export class FindUserDto {
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional()
  skip?: number;

  @IsOptional()
  @IsInt()
  @ApiPropertyOptional()
  take?: number;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiPropertyOptional()
  orderByCreated?: Prisma.SortOrder;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiPropertyOptional()
  orderByUserName?: Prisma.SortOrder;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  @ApiPropertyOptional()
  orderByName?: Prisma.SortOrder;
}
