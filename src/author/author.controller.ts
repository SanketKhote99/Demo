import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './create-author.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Post()
  create(@Body() createAuthorDeto: CreateAuthorDto) {
    return this.authorService.create(createAuthorDeto);
  }

  @Get()
  findAll() {
    return this.authorService.findAll();
  }

  @Get(':id')
  findById(@Param("id") id: number) {
    return this.authorService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createAuthorDto: CreateAuthorDto) {
    return this.authorService.update(+id, createAuthorDto);
  }

  @Delete(':id')
  deleteById(@Param("id") id: number) {
    return this.authorService.remove(id);
  }

  
}
