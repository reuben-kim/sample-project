import { setEnvironment } from '../../config/environment';
setEnvironment(__dirname);

import { NestFactory } from '@nestjs/core';
import { SampleModule } from './sample.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(SampleModule);

  await app.listen(5000);
}
bootstrap();
