import { IsOptional } from "class-validator";
import { Book } from "src/book/book.entity";

export class CreateAuthorDto{

    @IsOptional()
    name: string;

    @IsOptional()
    book: Book[];

}