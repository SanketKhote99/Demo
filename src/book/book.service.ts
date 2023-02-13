import { Injectable, Logger, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
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
        return await this.bookRepository.find({ select: { author: { name: true }, category: { category: true } }, relations: ['author', 'category'] });
    }


    async findById(id: number): Promise<Book> {
        return await this.bookRepository.findOne({ where: { id }, relations: ['author', 'category'] });



    }

    update(id: number, createBookDto: CreateBookDto) {
        return this.bookRepository.save({ ...createBookDto, id: id })


    }

    remove(id: number) {
        return this.bookRepository
            .delete({ id: id })
            .catch((err) => {
                throw new NotFoundException();
            });

    }

}

