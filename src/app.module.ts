import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyAnswerModule } from './daily-answer/daily-answer.module';
import { WeaponModule } from './weapon/weapon.module';
import { CharacterModule } from './character/character.module';
import { QuoteModule } from './quote/quote.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your chosen database type
      host: 'localhost',
      port: 5432,
      username: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // synchronize should be false in production
    }),
    DailyAnswerModule,
    CharacterModule,
    WeaponModule,
    QuoteModule,
  ],
})
export class AppModule {}
