import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Character } from '../character/character.entity';
import { Weapon } from '../weapon/weapon.entity';
// Import your entities

@Injectable()
export class DailyAnswerService {
  constructor(
    @InjectRepository(Character)
    private charactersRepository: Repository<Character>,
    @InjectRepository(Weapon)
    private weaponsRepository: Repository<Weapon>,
  ) {}

  private getDailyRandomSeed(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    return `${year}-${month}-${date}`;
  }

  private seededRandom(seed: string): number {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    const x = Math.sin(hash) * 10000;
    return x - Math.floor(x);
  }

  async getDailyAnswer() {
    const seed = this.getDailyRandomSeed();
    const characters = await this.charactersRepository.find();
    const weapons = await this.weaponsRepository.find();

    const randomIndexCharacter = Math.floor(
      this.seededRandom(seed + 'character') * characters.length,
    );
    const randomIndexWeapon = Math.floor(
      this.seededRandom(seed + 'weapon') * weapons.length,
    );

    console.log("Returning daily answer", characters[randomIndexCharacter], weapons[randomIndexWeapon])

    return {
      character: characters[randomIndexCharacter],
      weapon: weapons[randomIndexWeapon],
    };
  }

  // Add this method to populate initial data
  async populateData() {
    const characters = [
      {
        name: 'Ruby Rose',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'RWBY',
        profileImage: '/images/Ruby_Rose.jpg',
      },
      {
        name: 'Weiss Schnee',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'RWBY',
        profileImage: '/images/Weiss_Schnee.jpg',
      },
      {
        name: 'Blake Belladonna',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'RWBY',
        profileImage: '/images/Blake_Belladonna.jpg',
      },
      {
        name: 'Yang Xiao Long',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'RWBY',
        profileImage: '/images/Yang_Xiao_Long.jpg',
      },
      {
        name: 'Jaune Arc',
        gender: 'Male',
        school: 'Beacon Academy',
        team: 'JNPR',
        profileImage: '/images/Jaune_Arc.jpg',
      },
      {
        name: 'Nora Valkyrie',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'JNPR',
        profileImage: '/images/Nora_Valkyrie.jpg',
      },
      {
        name: 'Pyrrha Nikos',
        gender: 'Female',
        school: 'Beacon Academy',
        team: 'JNPR',
        profileImage: '/images/Pyrrha_Nikos.jpg',
      },
      {
        name: 'Lie Ren',
        gender: 'Male',
        school: 'Beacon Academy',
        team: 'JNPR',
        profileImage: '/images/Lie_Ren.jpg',
      },
      {
        name: 'Qrow Branwen',
        gender: 'Male',
        school: 'Signal Academy',
        team: 'STRQ',
        profileImage: '/images/Qrow_Branwen.jpg',
      },
      {
        name: 'Cinder Fall',
        gender: 'Female',
        school: 'Beacon Academy',
        team: "Salem's Faction",
        profileImage: '/images/Cinder_Fall.jpg',
      },
      {
        name: 'Ozpin',
        gender: 'Male',
        school: 'Beacon Academy',
        team: "Ozpin's Group",
        profileImage: '/images/Ozpin.jpg',
      },
      {
        name: 'Salem',
        gender: 'Female',
        school: 'N/A',
        team: "Salem's Faction",
        profileImage: '/images/Salem.jpg',
      },
      {
        name: 'Penny Polendina',
        gender: 'Female',
        school: 'Atlas Academy',
        team: 'N/A',
        profileImage: '/images/Penny_Polendina.jpg',
      },
      {
        name: 'James Ironwood',
        gender: 'Male',
        school: 'Atlas Academy',
        team: 'Atlas Military',
        profileImage: '/images/James_Ironwood.jpg',
      },
      {
        name: 'Winter Schnee',
        gender: 'Female',
        school: 'Atlas Academy',
        team: 'Atlas Military',
        profileImage: '/images/Winter_Schnee.jpg',
      },
      {
        name: 'Roman Torchwick',
        gender: 'Male',
        school: 'N/A',
        team: "Salem's Faction",
        profileImage: '/images/Roman_Torchwick.jpg',
      },
      {
        name: 'Neopolitan',
        gender: 'Female',
        school: 'N/A',
        team: "Salem's Faction",
        profileImage: '/images/Neopolitan.jpg',
      },
      // Add more characters as needed
    ];

    const weapons = [
      {
        name: 'Crescent Rose',
        type: 'Scythe/Sniper Rifle',
        wielder: 'Ruby Rose',
        profileImage: '/images/Crescent_Rose.jpg',
      },
      {
        name: 'Myrtenaster',
        type: 'Multi Action Dust Rapier',
        wielder: 'Weiss Schnee',
        profileImage: '/images/Myrtenaster.jpg',
      },
      {
        name: 'Gambol Shroud',
        type: 'Variant Ballistic Chain Scythe',
        wielder: 'Blake Belladonna',
        profileImage: '/images/Gambol_Shroud.jpg',
      },
      {
        name: 'Ember Celica',
        type: 'Dual Ranged Shot Gauntlets',
        wielder: 'Yang Xiao Long',
        profileImage: '/images/Ember_Celica.jpg',
      },
      {
        name: 'Crocea Mors',
        type: 'Sword and Shield',
        wielder: 'Jaune Arc',
        profileImage: '/images/Crocea_Mors.jpg',
      },
      {
        name: 'Magnhild',
        type: 'Hammer/Grenade Launcher',
        wielder: 'Nora Valkyrie',
        profileImage: '/images/Magnhild.jpg',
      },
      {
        name: 'Milo and Akouo',
        type: 'Javelin/Rifle and Shield',
        wielder: 'Pyrrha Nikos',
        profileImage: '/images/Milo_and_Akouo.jpg',
      },
      {
        name: 'StormFlower',
        type: 'Dual SMG Blades',
        wielder: 'Lie Ren',
        profileImage: '/images/StormFlower.jpg',
      },
      {
        name: 'Harbinger',
        type: 'Scythe/Shotgun',
        wielder: 'Qrow Branwen',
        profileImage: '/images/Harbinger.jpg',
      },
      {
        name: 'Midnight',
        type: 'Scimitar/Bow',
        wielder: 'Cinder Fall',
        profileImage: '/images/Midnight.jpg',
      },
      {
        name: 'Long Memory',
        type: 'Cane',
        wielder: 'Ozpin',
        profileImage: '/images/Long_Memory.jpg',
      },
      {
        name: 'Floating Array',
        type: 'Sword Array',
        wielder: 'Penny Polendina',
        profileImage: '/images/Floating_Array.jpg',
      },
      {
        name: 'Due Process',
        type: 'Dual Pistols',
        wielder: 'James Ironwood',
        profileImage: '/images/Due_Process.jpg',
      },
      {
        name: 'Arma Gigas',
        type: 'Sword',
        wielder: 'Winter Schnee',
        profileImage: '/images/Arma_Gigas.jpg',
      },
      {
        name: 'Melodic Cudgel',
        type: 'Cane',
        wielder: 'Roman Torchwick',
        profileImage: '/images/Melodic_Cudgel.jpg',
      },
      {
        name: 'Hush',
        type: 'Umbrella/Sword',
        wielder: 'Neopolitan',
        profileImage: '/images/Hush.jpg',
      },
      // Add more weapons as needed
    ];

    await this.charactersRepository.save(characters);
    await this.weaponsRepository.save(weapons);
  }

  // ... existing methods ...
}
