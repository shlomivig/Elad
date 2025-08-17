import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Products')
export class Products {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'nvarchar', length: 32 })
  name: string;
  
  @Column({ type: 'nvarchar', length: 32 })
  description: string;
  
  @Column({ type: 'int' })
  categoryId: number;
  
  @Column({ type: 'int' })
  price: number;

}