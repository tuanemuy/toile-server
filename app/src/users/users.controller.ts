import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User, Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.create(userData);
  }

  @Get()
  async findAll(@Query() query: Prisma.UserFindManyArgs): Promise<User[]> {
    return this.usersService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne({ id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userData: Prisma.UserUpdateInput) {
    return this.usersService.update({ id }, userData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id });
  }
}
