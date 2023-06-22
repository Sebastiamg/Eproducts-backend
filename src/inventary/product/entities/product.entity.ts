import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../caterogy/entities/category.entity';
import { Output } from '../../output/entities/output.entity';
import { InputDetails } from '../../input/entities/input-details.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column()
  name_product: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity_aviable: number;

  @Column()
  stock: boolean;

  @Column()
  image: string;

  @Column()
  until_box: boolean;

  //Relations
  //Category
  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: 'categoy_id' })
  category: Category;

  //Output
  @OneToMany(() => Output, (output) => output.product, {
    eager: true,
  })
  outputs: Output[];

  //Input Details
  @OneToMany(() => InputDetails, (inputDetails) => inputDetails.product)
  inputDetails: InputDetails[];
}
