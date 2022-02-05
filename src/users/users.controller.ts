import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

// tag categorizes api calls in the swagger docs
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    // clarify the OK response from the API
    @ApiOkResponse({type: User, isArray: true})
    // get all users
    @Get()
    getUsers(): User[] {
        return this.usersService.findAll();
    }

    // clarify the OK response from the API
    @ApiOkResponse({type: User})
    // get specific user based off id
    @Get(':id')
    getUserById(@Param('id') id: string): User { // TODO: autoparse id
        return this.usersService.findById(Number(id))
    }

    // EXTENDED FUNCTIONALITY
    // tag indicates the response type for the swagger docs
    @ApiCreatedResponse({type: User})
    // post call for creating a user
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body);
    }
}
