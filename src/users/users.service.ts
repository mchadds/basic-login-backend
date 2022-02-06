import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    // static array of users
    // utilized for querying since database will not be used in this project
    private users: User[] = [
        { id: 1, username: 'testChad', password: 'testPassChad', providerId: 1, name: 'Chad' },
        { id: 2, username: 'testBob', password: 'testPassBob', providerId: 1, name: 'Bob' },
        { id: 3, username: 'testTina', password: 'testPassTina', providerId: 2, name: 'Tina' },
        { id: 4, username: 'testShannon', password: 'testPassShannon', providerId: 2, name: 'Shannon' },
        { id: 5, username: 'testKelly', password: 'testPassKelly', providerId: 2, name: 'Kelly' }
    ];

    async findOne(username: string, providerId: number): Promise<User | undefined> {
        return this.users.find(user => (user.username === username && user.providerId === providerId));
    }

    // return all users
    findAll(name?: string): User[] {
        if (name) {
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    // EXTENDED FUNCTIONALITY
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
