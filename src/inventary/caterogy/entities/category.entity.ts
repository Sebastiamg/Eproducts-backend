import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column({ unique: true })
  name_category: string;

  @Column({ nullable: true })
  description: string;

  // Relations
  // Product
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
