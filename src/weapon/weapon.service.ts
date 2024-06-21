import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Weapon } from './weapon.entity';

@Injectable()
export class WeaponService {
  constructor(
    @InjectRepository(Weapon)
    private weaponRepository: Repository<Weapon>,
  ) {}

  findAll(): Promise<Weapon[]> {
    return this.weaponRepository.find();
  }

  async findOne(name: string): Promise<Weapon[]> {
    try {
      const weapons = await this.weaponRepository.find({
        where: {
          name: Like(`${name}%`),
        },
      });
      return weapons;
    } catch (error) {
      throw new Error(`Failed to find weapons: ${error.message}`);
    }
  }
}
