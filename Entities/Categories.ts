import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class Categories {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'nvarchar', length: 32 })
  name: string;
  
  @Column({ type: 'nvarchar', length: 32 })
  description: string;

  @Column({ type: 'bit' })
  isActive: boolean;

  @Column({ type: 'datetime' })
  iTime: Date;
}
