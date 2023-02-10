import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
    
  }

}
