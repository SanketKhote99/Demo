import { Injectable, Logger, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/create-user.dto';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { CreateAuthorDto } from './create-author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly repository: Repository<Author>,
  ) { }

  create(createAuthorDto: CreateAuthorDto)  {
    return this.repository.save(createAuthorDto).catch((err) => {
      throw new NotAcceptableException();
    });
  }

  async findAll(): Promise<Author[]> {
      return await this.repository.find();
    } 
  
    async findById(id:number): Promise<Author> {
      return await this.repository.findOneBy({id});
    } 
    
    update(id: number, createAuthorDto: CreateAuthorDto) {
      Logger.debug({...createAuthorDto})
      return this.repository
        .save({ ...createAuthorDto, id: id })
        .catch((err) => {
          throw new NotAcceptableException();
        });
        
      }

    remove(id: number) {
      return this.repository
        .delete({ id: id })
        .catch((err) => {
          throw new NotFoundException();
        });
  
      }
    
    }



