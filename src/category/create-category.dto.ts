import { IsOptional } from "class-validator";
import { Book } from "src/book/book.entity";


export class CreateCategoryDto{

    @IsOptional()
    id;

    @IsOptional()
    category;

    @IsOptional()
    books: Book[];

}