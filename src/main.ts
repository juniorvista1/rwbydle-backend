import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DailyAnswerService } from './daily-answer/daily-answer.service';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Define CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed HTTP headers
  };

  // Enable CORS with options
  app.enableCors(corsOptions);

  /* const dailyAnswerService = app.get(DailyAnswerService);
  await dailyAnswerService.populateData(); // This line populates the database */
  await app.listen(3001);
}
bootstrap();
