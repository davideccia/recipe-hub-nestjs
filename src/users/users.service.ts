import {Injectable} from '@nestjs/common';
import {DatabaseService} from 'src/database/database.service';
import {Prisma} from 'src/generated/prisma/client';

@Injectable()
export class UsersService {
    constructor(private readonly databaseService: DatabaseService) {
    }

    async findAll(role?: 'admin' | 'user') {
        const query = this.databaseService.user;

        if (role) {
            return query.findMany({
                where: {
                    role: role,
                },
            });
        }

        return query.findMany();
    }

    async findOne(id: string) {
        return this.databaseService.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    async create(createUserDto: Prisma.UserCreateInput) {
        return this.databaseService.user.create({
            data: createUserDto,
        });
    }

    async update(id: string, updateUserDto: Prisma.UserUpdateInput) {
        return this.databaseService.user.update({
            where: {
                id: id,
            },
            data: updateUserDto,
        });
    }

    async remove(id: string) {
        return this.databaseService.user.delete({
            where: {
                id: id,
            },
        });
    }
}
