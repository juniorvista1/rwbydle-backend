// src/quotes/quotes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesService } from './quote.service';
import { QuotesController } from './quote.controller';
import { Quote } from './quote.entity';
import { Character } from '../character/character.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote, Character])],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class QuotesModule {}
