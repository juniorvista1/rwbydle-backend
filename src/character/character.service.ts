// src/character/character.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Character } from './character.entity';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
  ) {}

  findAll(): Promise<Character[]> {
    return this.charactersRepository.find();
  }

  async findOne(name: string): Promise<Character[]> {
    console.log("Finding characters with name", name)
    try {
      const characters = await this.charactersRepository.find({
        where: {
          name: Like(`${name}%`),
        },
      });
      return characters;
    } catch (error) {
      throw new Error(`Failed to find characters: ${error.message}`);
    }
  }

  /* async getDailyCharacter(): Promise<Character> {
    const characters = await this.charactersRepository.find();
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  } */
}
