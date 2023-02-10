import { IsOptional } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    name : string;

    @IsOptional()
    age : number;
}
