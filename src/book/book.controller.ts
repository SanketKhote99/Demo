import { Body, Controller, Logger, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';

@Controller('book')
export class BookController {
  constructor( private readonly bookService: BookService) {}

  @Post()
  create(@Body() createbookDto: CreateBookDto) {
    return this.bookService.create(createbookDto);
  }

}
