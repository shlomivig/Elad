import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Categories } from 'Entities/Categories';
import { AuthModule } from 'src/auth/auth.module';

@Module({
   imports: [
    TypeOrmModule.forFeature([Categories]),
    AuthModule, 
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
