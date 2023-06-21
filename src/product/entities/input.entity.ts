import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // id_provider: number;
}
