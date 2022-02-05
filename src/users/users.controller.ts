import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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
    // indicate optional parameters
    @ApiQuery({name: 'name', required: false})
    // get all users
    @Get()
    getUsers(@Query('name') name: string): User[] {
        return this.usersService.findAll(name);
    }

    // clarify the OK response from the API
    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    // get specific user based off id
    @Get(':id')
    getUserById(@Param('id') id: string): User { // TODO: autoparse id

        const user = this.usersService.findById(Number(id));

        if (!user) {
            throw new NotFoundException();
        }

        return user;
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
