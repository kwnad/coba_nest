import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// membuat parameter untuk mengambil nilai port
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  Logger.log(`Jalan di localhost:${port}`, 'Running PORT');
}
bootstrap();
