import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyAnswerService } from './daily-answer.service';
import { DailyAnswerController } from './daily-answer.controller';
import { Character } from '../character/character.entity';
import { Weapon } from '../weapon/weapon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Weapon])],
  providers: [DailyAnswerService],
  controllers: [DailyAnswerController],
})
export class DailyAnswerModule {}
