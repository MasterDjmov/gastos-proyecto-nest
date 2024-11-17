import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //activando cors, para poder enviar y recibir de dominios/puertos diferentes
  app.enableCors({
    origin: 'http://localhost:5173', // Permite las solicitudes del frontend react
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Permite el envío de cookies
  });

  /*Agrego swagger */
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('items Documentation')
    .setDescription('Aquí prueba de una descripción')
    .setVersion('1.0')
    .addTag('items')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, documentFactory);

  //activo la pipe para poder enviar datos seguros en postman
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist:true,  //no deja enviar mas de lo especificado
    forbidNonWhitelisted:true//lo recibe pero da error en json avisa que no existe la propiedad
  }));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
