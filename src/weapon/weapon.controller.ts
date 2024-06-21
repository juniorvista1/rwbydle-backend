import { Controller, Get, Query } from '@nestjs/common';
import { WeaponService } from './weapon.service';
import { Weapon } from './weapon.entity';

@Controller('weapon')
export class WeaponController {
  constructor(private readonly weaponService: WeaponService) {}

  @Get()
  findAll(): Promise<Weapon[]> {
    return this.weaponService.findAll();
  }

  @Get('search')
  async findOne(@Query('name') name: string): Promise<Weapon[]> {
    return this.weaponService.findOne(name);
  }
}
