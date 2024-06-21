// src/character/character.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.entity';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  findAll(): Promise<Character[]> {
    return this.characterService.findAll();
  }

  /* @Get('daily')
  getDailyCharacter(): Promise<Character> {
    return this.characterService.getDailyCharacter();
  } */

  @Get('search')
  async findOne(@Query('name') name: string): Promise<Character[]> {
    return this.characterService.findOne(name);
  }
}
