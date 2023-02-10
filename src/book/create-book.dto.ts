import { IsOptional } from "class-validator";


export class CreateBookDto{
    @IsOptional()
    title;

    @IsOptional()
    author;

    @IsOptional()
    category;
}