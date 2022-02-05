import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    // get all users
    @Get()
    getUsers(): User[] {
        return this.usersService.findAll();
    }

    // get specific user based off id
    @Get(':id')
    getUserById(@Param('id') id: string): User { // TODO: autoparse id
        return this.usersService.findById(Number(id))
    }

    // EXTENDED FUNCTIONALITY
    // post call for creating a user
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body);
    }
}
