import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsController } from './products.controller';
import { Products } from 'Entities/Products';

@Module({
    imports: [
        TypeOrmModule.forFeature([Products]),
        AuthModule
    ],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule { }
