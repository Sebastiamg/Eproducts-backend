import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { Input } from './input.entity';

@Entity()
export class InputDetails {
  @PrimaryGeneratedColumn()
  id_input_details: number;

  @Column()
  incoming_quantity: number;

  //Relations
  //Input
  @ManyToOne(() => Input, (input) => input.input_details)
  input: Input;

  //Product
  @ManyToOne(() => Product, (product) => product.inputDetails)
  product: Product;
}
