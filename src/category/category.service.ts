import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) 
    private readonly bookRepository: Repository<Category>){}

    create(createCategoryDto: Category) {
        return this.bookRepository.save(createCategoryDto);
    }


}

