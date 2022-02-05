import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    // static array of users
    // utilized for querying since database will not be used in this project
    private users: User[] = [{ id: 0, name: 'Chad' }];

    // return all users
    findAll(): User[] {
        return this.users;
    }

    // return specific user based on id
    findById(userId: number): User {
        return this.users.find(user => user.id === userId);  
    }
    
    //EXTENDED FUNCTIONALITY
    // create a new user
    createUser(createUserDto: CreateUserDto): User {
        const newUser = { id: Date.now(), ...createUserDto };
        this.users.push(newUser);
        return newUser;
    }
}