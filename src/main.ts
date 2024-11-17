import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
