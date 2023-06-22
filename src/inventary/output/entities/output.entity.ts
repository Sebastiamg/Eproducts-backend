import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Output {
  @PrimaryGeneratedColumn()
  id_output: number;

  @Column()
  date_output: Date;

  @Column()
  outgoing_amount: number;

  //Relations
  //Product
  @ManyToOne(() => Product, (product) => product.outputs)
  product: Product;
}
