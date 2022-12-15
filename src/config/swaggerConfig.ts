import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const useSwagger = (app: INestApplication): void => {
  const apiDescription = new DocumentBuilder()
    .setTitle('User Api')
    .setDescription('Excample user')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, apiDescription);
  SwaggerModule.setup('/api/docs', app, swaggerDocument);
};
