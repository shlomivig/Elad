import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'Entities/Users';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { Categories } from 'Entities/Categories';
import { ProductsModule } from './products/products.module';
import { Products } from 'Entities/Products';
import { CartModule } from './cart/cart.module';
import { Cart } from 'Entities/Cart';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'host', 
      port: 1433,
      username: 'username',
      password: 'password',
      database: 'database',
      entities: [User, Categories, Products, Cart], 
      synchronize: false, 
      options: {  
        encrypt: false,
      },
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
    CartModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
