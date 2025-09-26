import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FormataFilter } from './filters/formata.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new FormataFilter())

  app.enableCors({
    origin: 'http://localhost:3000', // permite só teu frontend
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
