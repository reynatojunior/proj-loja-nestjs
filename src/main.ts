// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilite CORS com configurações específicas
  app.enableCors({
    origin: 'http://127.0.0.1:5500', // Ou '*' para permitir qualquer origem (não recomendado para produção)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(3000);
}
bootstrap();