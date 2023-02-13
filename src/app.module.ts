import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author/author.entity';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { Book } from './book/book.entity';
import { Category } from './category/category.entity';

@Module({
  imports: [ 
    
    // UserModule,
    BookModule,
    AuthorModule,
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'Pass',
      database: 'sk',
      entities: [Author,Book,Category],
      synchronize: true,
    }),
   

  ],

})
export class AppModule {}
