import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'Entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Products)
        private productsRepository: Repository<Products>,
    ) { }

    async findAll(id: number): Promise<Products[] | null> {
        let categoryId = id;
        return await this.productsRepository.find({
            where: { categoryId }
        });
    }   
    
}
