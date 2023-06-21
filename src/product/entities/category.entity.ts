import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id_category: number;

  @Column()
  name_category: string;

  @Column()
  description: string;
}
