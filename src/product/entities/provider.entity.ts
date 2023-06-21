import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id_provider: number;

  @Column()
  name_provider: string;

  @Column()
  direction: string;

  @Column()
  telephone: string;
}
