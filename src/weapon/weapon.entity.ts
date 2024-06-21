import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Weapon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  wielder: string;

  @Column()
  profileImage: string;
}
