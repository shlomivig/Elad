import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from 'Entities/Categories';
import { JwtAuthGuard } from 'src/services/JwtService';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<Categories[] | null> {
        return await this.categoriesService.findAll();
    }

}
