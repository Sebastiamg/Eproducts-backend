import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Output {
  @PrimaryGeneratedColumn()
  id_output: number;

  @Column()
  date_output: Date;

  @Column()
  outgoing_amount: number;

  // id_product: number;
}
