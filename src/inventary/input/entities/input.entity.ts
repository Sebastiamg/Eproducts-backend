import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Provider } from '../../provider/entities/provider.entity';
import { InputDetails } from './input-details.entity';

@Entity()
export class Input {
  @PrimaryGeneratedColumn()
  id_input: number;

  @Column()
  input_number: number;

  @Column()
  input_details: string;

  @Column()
  date: Date;

  // Relations
  // Product - input details
  @OneToMany(() => InputDetails, (InputDetails) => InputDetails.input, {
    eager: true,
  })
  Input_details: InputDetails[];

  // provider
  @ManyToOne(() => Provider, (provider) => provider.inputs, {
    eager: true,
  })
  @JoinColumn()
  provider: Provider;
}
