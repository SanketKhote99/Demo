import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book) 
    private bookRepository: Repository<Book>){}


    create(createBookDto: CreateBookDto) {
        return this.bookRepository.save(createBookDto).catch((err) => {
            throw new NotAcceptableException();
    });

    }

}

