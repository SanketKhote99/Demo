import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      port: 3306,
      host: this.config.get('DATABASE_HOST'),
      database: this.config.get('DATABASE_NAME'),
      username: this.config.get('DATABASE_USERNAME'),
      password: this.config.get('DATABASE_PASSWORD'),
      synchronize: this.config.get('DATABASE_SYNC'),
      autoLoadEntities: true,
      timezone: '+00:00',
      entities: ['dist/**/*.entity{.ts,.js}'],
      logger: 'file',
      logging: ['error', 'warn', 'log'],
    };
  }
}
