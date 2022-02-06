import { ApiProperty } from "@nestjs/swagger";

// class the represents the shape of the provider object
// if was connecting to a database this entity would map one to one to the provider DB table
// this class represents provider
export class Provider {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;
}