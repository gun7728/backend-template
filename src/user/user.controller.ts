import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  createUser(@TypedBody() data: Prisma.UserCreateInput) {
    return this.userService.createUser(data);
  }

  @TypedRoute.Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @TypedRoute.Get(':id')
  getUserById(@TypedParam('id') id: string) {
    return this.userService.getUserById(Number(id));
  }

  @TypedRoute.Put(':id')
  updateUser(
    @TypedParam('id') id: string,
    @TypedBody() data: Prisma.UserUpdateInput,
  ) {
    return this.userService.updateUser(Number(id), data);
  }

  @TypedRoute.Delete(':id')
  deleteUser(@TypedParam('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
