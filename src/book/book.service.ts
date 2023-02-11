import { Injectable, Logger, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book)
    private bookRepository: Repository<Book>) { }


    create(createBookDto: CreateBookDto) {
        return this.bookRepository.save(createBookDto).catch((err) => {
            throw new NotAcceptableException();
        });

    }


    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async findById(id: string): Promise<Book> {
        return await this.bookRepository.findOneBy({ id });
    }

    update(id: string, createBookDto: CreateBookDto) {
        return this.bookRepository.save({ ...createBookDto,id: id})
            

    }

    remove(id: string) {
        return this.bookRepository
            .delete({ id: id })
            .catch((err) => {
                throw new NotFoundException();
            });

    }

}

