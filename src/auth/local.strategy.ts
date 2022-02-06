import {Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

// represents the local strategy from passport 

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    // utilize auth service
    constructor(private authService: AuthService) {
        super({
            // allow for request to be passed to the validate method - this where the providerId can be accessed
             passReqToCallback: true 
        }); // if you are using a different passport level than local this is where additional config goes
    }

    // passport method that validates the credentials of the sign in
    async validate(request: Request, username: string, password: string): Promise<any> {
        // isolate the providerId
        const providerId = request.body['providerId'];
        // check if login credentials are valid by using the authService
        const user = await this.authService.validateUser(username, password, providerId);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}