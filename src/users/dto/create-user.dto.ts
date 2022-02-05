import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

// dto file for data transfer object - set data structure
export class CreateUserDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    providerId: number;

    // tag allows representation of the schema for the request in the swagger docs
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name: string;
}
