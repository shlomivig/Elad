import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'Entities/Cart';
import { AuthModule } from 'src/auth/auth.module';
import { Products } from 'Entities/Products';


@Module({
  imports:[
    TypeOrmModule.forFeature([Cart, Products]),
    AuthModule
  ],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
