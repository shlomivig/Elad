import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cart')
export class Cart {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'int' })
  userId: number;
  
  @Column({ type: 'int' })
  cartId: number;

  @Column({ type: 'int' })
  productId: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'bit' })
  isActive: boolean;

  @Column({ type: 'datetime' })
  iTime: Date;
}



