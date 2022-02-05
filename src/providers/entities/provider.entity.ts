// class the represents the shape of the user object
import { ApiProperty } from "@nestjs/swagger";

// if was connecting to a databse this entity would map one to one to the user DB table
// this class represents insurance providers
export class Provider {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

}
