import * as dotenv from 'dotenv';
dotenv.config();

import { ConfigService } from '@nestjs/config';
import * as path from 'path';

export const environment = {
  MAIN_FOLDER_PATH: '',

  DB_FULL_QUERY_LOG: true,
  DB_WRITER_HOST: '',
  DB_PORT: 33068,
  DB_USERNAME: '',
  DB_PASSWORD: '',
};

export const setEnvironment = (startFilePath: string): typeof environment => {
  const config = new ConfigService();

  environment.MAIN_FOLDER_PATH = path.join(startFilePath, '../../');

  environment.DB_WRITER_HOST = config.get('DB_WRITER_HOST') || '';
  environment.DB_USERNAME = config.get('DB_USERNAME') || '';
  environment.DB_PASSWORD = config.get('DB_PASSWORD') || '';
  environment.DB_PORT = config.get('DB_PORT') || 33068;
  environment.DB_FULL_QUERY_LOG = config.get('DB_FULL_QUERY_LOG') || true;

  Object.entries(environment).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      console.log(`** Env Variable ${key} Is Not Set`);
    }
  });

  return Object.freeze(environment);
};
