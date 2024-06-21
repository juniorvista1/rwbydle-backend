import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyAnswerModule } from './daily-answer/daily-answer.module';
import { WeaponModule } from './weapon/weapon.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your chosen database type
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: '123456',
      database: 'animegallery',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // synchronize should be false in production
    }),
    DailyAnswerModule,
    CharacterModule,
    WeaponModule,
  ],
})
export class AppModule {}
