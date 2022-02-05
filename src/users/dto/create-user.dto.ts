import { ApiProperty } from "@nestjs/swagger";

// dto file for data transfer object - set data structure
export class CreateUserDto {
    // tag allows representation of the schema for the request in the swagger docs
    @ApiProperty()
    name: string;
}
