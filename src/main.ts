/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000 ;
  app.enableCors({
    origin:'*',
    methods:'GET, HEAD, PUT, PATCH, POST, DELETE',
    allowedHeaders: 'Content-Type,Accept',
  })
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  await app.listen(PORT, () => {
    console.log(
      `Running API in MODE: ${process.env.NODE_ENV} on Port: ${PORT}`,
    );
  });
  
  
}
bootstrap();