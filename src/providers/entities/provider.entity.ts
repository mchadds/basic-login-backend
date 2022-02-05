// class the represents the shape of the provider object
import { ApiProperty } from "@nestjs/swagger";

// if was connecting to a databse this entity would map one to one to the provider DB table
// this class represent provider
export class Provider {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}