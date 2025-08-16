import { Controller, Get, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'Entities/Users';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[] | null> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const user = await this.usersService.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID: ${id} not found`);
        }
        return user;
    }
}