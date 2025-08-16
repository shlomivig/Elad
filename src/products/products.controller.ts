import { Controller, Get, NotFoundException, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from 'Entities/Products';
import { JwtAuthGuard } from 'src/services/JwtService';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findAll(@Param('id', ParseIntPipe) id: number): Promise<Products[] | null> {
        return await this.productsService.findAll(id);
    }

}

