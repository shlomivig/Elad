import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'Entities/Categories';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>,
    ) { }

    async findAll(): Promise<Categories[] | null> {
        return await this.categoriesRepository.find();
    }
}
