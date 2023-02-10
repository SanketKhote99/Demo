import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto).catch((err) => {
      throw new NotAcceptableException();
    });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepository.findOneByOrFail({ id });
    } catch {
      throw new NotFoundException();
    }
  }

  update(id: number, createUserDto: CreateUserDto) {
    return this.userRepository
      .save({ ...createUserDto, id: id })
      .catch((err) => {
        throw new NotFoundException();
      });
  }

  remove(id: number) {
    return this.userRepository
      .delete({ id: id })
      .catch((err) => {
        throw new NotFoundException();
      });

  }
}
