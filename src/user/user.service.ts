import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
