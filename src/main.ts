import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // pipes to be used throughout entire applicatoin
  app.useGlobalPipes(new ValidationPipe());

  // configuration for swagger documentation
  const config = new DocumentBuilder()
  .setTitle('Basic Login Backend API')
  .setDescription('This API is used for basic login functionality of an application.')
  .setVersion('1.0')
  .build();

  // instance of swagger documentation for the application
  const document = SwaggerModule.createDocument(app, config);

  // setup documentation components including where it will be located
  SwaggerModule.setup('/', app, document);

  await app.listen(3000);
}
bootstrap();
