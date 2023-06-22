import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InputDetails } from './input-details.entity';
import { Provider } from '../../provider/entities/provider.entity';

@Entity()
export class Input {
  @PrimaryGeneratedColumn()
  id_input: number;

  @Column()
  input_number: number;

  // @Column()
  // input_details: string;

  @Column()
  date: Date;

  //Relations
  //Input Details
  @OneToMany(() => InputDetails, (inputDetails) => inputDetails.input)
  input_details: InputDetails[];

  @ManyToOne(() => Provider, (provider) => provider.inputs)
  provider: Provider;
}
