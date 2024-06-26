import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeaponController } from './weapon.controller';
import { Weapon } from './weapon.entity';
import { WeaponService } from './weapon.service';

@Module({
  imports: [TypeOrmModule.forFeature([Weapon])],
  providers: [WeaponService],
  controllers: [WeaponController],
})
export class WeaponModule {}
