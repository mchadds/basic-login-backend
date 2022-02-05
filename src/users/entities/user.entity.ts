// class the represents the shape of the user object

import { ApiProperty } from "@nestjs/swagger";

// if was connecting to a databse this entity would map one to one to the user DB table
export class User {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}