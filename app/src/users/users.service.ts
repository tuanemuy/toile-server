import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const args: Prisma.UserCreateArgs = {
      data: {
        authId: createUserDto.authId,
        username: createUserDto.username,
        profile: {
          create: {
            name: createUserDto.name,
            thumbnailId: createUserDto.thubmnailId,
          },
        },
      },
    };

    return this.prisma.user.create(args);
  }

  async findAll(findUserDto: FindUserDto): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        profile: true,
      },
      where: {},
      orderBy: {
        createdAt: findUserDto.orderByCreated,
        username: findUserDto.orderByUserName,
        profile: {
          name: findUserDto.orderByName,
        },
      },
    });
  }

  async findOne(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async update(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    const args: Prisma.UserUpdateArgs = {
      where: { username },
      data: {
        profile: {
          update: {
            name: updateUserDto.name,
            thumbnailId: updateUserDto.thubmnailId,
          },
        },
      },
    };

    return this.prisma.user.update(args);
  }

  async remove(username: string): Promise<User> {
    return this.prisma.user.delete({
      where: { username },
    });
  }
}
