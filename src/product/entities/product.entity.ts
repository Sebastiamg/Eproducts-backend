import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // id_category: number;
}
