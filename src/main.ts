import { NestiaSwaggerComposer } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
  })
  const document = await NestiaSwaggerComposer.document(app, {
    openapi: '3.1',
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Localhost',
      },
    ],
  });
  SwaggerModule.setup('api', app, document as any);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
