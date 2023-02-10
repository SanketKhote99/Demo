import { IsOptional } from "class-validator";


export class CreateCategoryDto{

    @IsOptional()
    id;

    @IsOptional()
    category;

}