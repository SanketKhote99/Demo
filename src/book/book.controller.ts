import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book.dto';

@Controller('book')
export class BookController {
  constructor( private readonly bookService: BookService) {}

  @Post()
  create(@Body() createbookDto: CreateBookDto) {
    return this.bookService.create(createbookDto);
  }
  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findById(@Param("id") id: string) {
    return this.bookService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createbookDto: CreateBookDto) {
    return this.bookService.update(id, createbookDto);
  }

  @Delete(':id')
  deleteById(@Param("id") id: string) {
    return this.bookService.remove(id);
  }

}
