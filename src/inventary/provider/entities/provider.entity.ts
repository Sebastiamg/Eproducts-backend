import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Input } from '../../input/entities/input.entity';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id_provider: number;

  @Column({ unique: true })
  name_provider: string;

  @Column()
  direction: string;

  @Column()
  telephone: string;

  // Relations
  // Input
  @OneToMany(() => Input, (input) => input.provider)
  inputs: Input[];
}
