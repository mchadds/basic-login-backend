// class the represents the shape of the user object
import { ApiProperty } from "@nestjs/swagger";

// if was connecting to a databse this entity would map one to one to the user DB table
// this class represent users
export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    providerId: number;

    @ApiProperty()
    name: string;
}