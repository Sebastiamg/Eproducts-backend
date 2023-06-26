import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column()
  name_admin: string;

  @Column()
  gmail: string;

  @Column()
  telephone: number;

  @Column()
  password: string;

  @Column({ nullable: true })
  image: string;
}
