import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
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
  @ManyToOne(() => Product, (product) => product.outputs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  product: Product;

  @BeforeInsert()
  transformDate() {
    if (!this.date_output) return;
    this.date_output = new Date(this.date_output.toString());
  }
}
