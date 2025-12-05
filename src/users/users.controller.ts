import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe,} from '@nestjs/common';
import {UsersService} from './users.service';
import {Prisma} from 'src/generated/prisma/client';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    findAll(@Query('role') role?: 'admin' | 'user') {
        return this.usersService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: Prisma.UserCreateInput) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: string,
        @Body(ValidationPipe)
        updateUserDto: Prisma.UserUpdateInput,
    ) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: string) {
        return this.usersService.remove(id);
    }
}
