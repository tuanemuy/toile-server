import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ isArray: true })
  async findAll(@Query() findUserDto: FindUserDto): Promise<User[]> {
    return this.usersService.findAll(findUserDto);
  }

  @Get(':username')
  @ApiOkResponse()
  async findOne(@Param('username') username: string): Promise<User | null> {
    return this.usersService.findOne(username);
  }

  @Patch(':username')
  @ApiOkResponse()
  async update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(username, updateUserDto);
  }

  @Delete(':username')
  @ApiOkResponse()
  async remove(@Param('username') username: string): Promise<User> {
    return this.usersService.remove(username);
  }
}
