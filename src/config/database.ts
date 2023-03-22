import { InternalServerErrorException } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { First_Entity } from '../models/firstDB/first';
import { Second_Entity } from '../models/secondDB/second';
import { environment } from './environment';

export const enum DatabaseType {
  First = 'first',
  Second = 'second',
}

export const getDatabaseConfig = (type: DatabaseType) => (): TypeOrmModuleOptions => {
  if (type === DatabaseType.First) {
    const entityPath = path.join(environment.MAIN_FOLDER_PATH, `./models/${type}/**/*.{js,ts}`);

    return {
      autoLoadEntities: true,
      name: type,
      type: 'mysql',
      synchronize: false,
      entities: [First_Entity],
      timezone: 'Z',
      host: environment.DB_WRITER_HOST,
      port: environment.DB_PORT,
      username: environment.DB_USERNAME,
      password: environment.DB_PASSWORD,
      database: type,
    };
  }

  if (type === DatabaseType.Second) {
    const entityPath = path.join(environment.MAIN_FOLDER_PATH, `./models/${type}/**/*.{js,ts}`);

    return {
      autoLoadEntities: true,
      name: type,
      type: 'mysql',
      synchronize: false,
      entities: [Second_Entity],
      timezone: 'Z',
      host: environment.DB_WRITER_HOST,
      port: environment.DB_PORT,
      username: environment.DB_USERNAME,
      password: environment.DB_PASSWORD,
      database: type,
    };
  }

  throw new InternalServerErrorException();
};
