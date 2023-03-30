import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author/author.entity';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { Book } from './book/book.entity';
import { Category } from './category/category.entity';
import { TypeOrmConfigService } from './config/database/mysql.service';
import { configuration } from './config/app/configuration';
import { validationSchema } from './config/app/validation_schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // UserModule,
    BookModule,
    AuthorModule,
    CategoryModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'sanket',
    //   password: 'password',
    //   database: 'myapp',
    //   entities: [Author,Book,Category],
    //   synchronize: true,
    // }),

    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/env/${process.env.APP_ENV}.env`,
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
  ],
})
export class AppModule {}
