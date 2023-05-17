import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.useGlobalPipes( new ValidationPipe() );
  app.use( cors( [
    {
      origin: 'http://localhost:3005',
      allowedHeaders: 'Content-Type, Accept',
    },
    {
      origin: 'https://laptop99.netlify.app/',
      allowedHeaders: 'Content-Type, Accept',
    }
  ] ) );
  await app.listen( 3000, () => { } );
}
bootstrap();
