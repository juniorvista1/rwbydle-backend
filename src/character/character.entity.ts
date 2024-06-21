import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  school: string;

  @Column()
  team: string;

  @Column()
  profileImage: string;
}
