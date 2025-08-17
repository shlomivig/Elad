import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ type: 'nvarchar', length: 32 })
  fName: string;
  
  @Column({ type: 'nvarchar', length: 32 })
  lName: string;

  @Column({ type: 'bit' })
  isMale: boolean;

  @Column({ type: 'nvarchar', length: 32 })
  username: string;

  @Column({ type: 'varchar', length: 32 })
  password: string;
  
  @Column({ type: 'varchar', length: 32 })
  phone: string;
  
  @Column({ type: 'varchar', length: 4 })
  countryCode: string;
  
  @Column({ type: 'nvarchar', length: 32 })
  city: string;
  
  @Column({ type: 'nvarchar', length: 64 })
  address: string;
  
  @Column({ type: 'varchar', length: 16 })
  zipcode: string;
  
}