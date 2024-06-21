// src/quotes/quotes.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';
import { Character } from '../character/character.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  async findAll(): Promise<Quote[]> {
    return this.quotesRepository.find({ relations: ['character'] });
  }

  async findRandom(): Promise<Quote> {
    const quotes = await this.quotesRepository.find({
      relations: ['character'],
    });
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
}
