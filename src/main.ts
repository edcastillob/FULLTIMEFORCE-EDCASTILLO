import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { CORS } from './constant';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(morgan('dev'));
  app.enableCors(CORS)  

  const port = configService.get<number>('PORT');

  await app.listen(port);
  console.log(`⚡📱 Application running on port ${port} ...`);
}
bootstrap();
