import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    // static array of users
    // utilized for querying since database will not be used in this project
    private users: User[] = [
        { id: 0, username: 'testChad', password: 'testPassChad', providerId: 0, name: 'Chad' },
        { id: 1, username: 'testBob', password: 'testPassBob', providerId: 1, name: 'Bob' },
        { id: 2, username: 'testTina', password: 'testPassTina', providerId: 0,name: 'Tina' },
        { id: 3, username: 'testShannon', password: 'testPassShannon', providerId: 0,name: 'Shannon' },
        { id: 4, username: 'testKelly', password: 'testPassKelly', providerId: 2, name: 'Kelly' }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }




    // return all users
    findAll(name?: string): User[] {
        if (name) {
            return this.users.filter(user => user.name === name);
        }
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
