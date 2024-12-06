import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const HOST = 'localhost';

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}
bootstrap();
