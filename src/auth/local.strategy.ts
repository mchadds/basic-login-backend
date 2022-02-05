// represents the local strategy from passport 

import {Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    // utilize auth service
    constructor(private authService: AuthService) {
        super({
            // allow for request to be passed to the validate method - this we the providerId can be accessed
             passReqToCallback: true 
        }); // if you are using a different passport level than local this is where additional config goes
    }

    // passport method that validates the credentials of the sign in
    async validate(request: Request, username: string, password: string): Promise<any> {
        const providerId = request.body['providerId'];
        
        const user = await this.authService.validateUser(username, password, providerId);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}