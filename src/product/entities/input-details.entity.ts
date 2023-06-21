import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InputDetails {
  @PrimaryGeneratedColumn()
  id_input_details: number;

  @Column()
  incoming_quantity: number;

  // id_input: number;
  // id_product: number;
}
