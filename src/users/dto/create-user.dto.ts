import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric } from "class-validator";

// dto file for data transfer object - set data structure
export class CreateUserDto {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    providerId: number;
    @ApiProperty()
    @IsAlphanumeric()
    name: string;
}
