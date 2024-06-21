// src/quotes/entities/quote.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Character } from '../character/character.entity';

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Character, (character) => character.quotes)
  character: Character;
}
