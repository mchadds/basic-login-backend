import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(username: string, password: string, providerId: number): Promise<any> {
        const user = await this.usersService.findOne(username, providerId);

        if (user && user.password === password) {

            // return all other properties except username and password
            const { password, username, ...rest } = user
            return rest;
        }

        // username and password and providerId combination do not exist
        return null;
    }
}
