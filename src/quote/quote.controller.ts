// src/quotes/quotes.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuotesService } from './quote.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Get('random')
  findRandom() {
    return this.quotesService.findRandom();
  }
}
