import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/services/JwtService';
import { Cart } from 'Entities/Cart';

@Controller('cart')
export class CartController {

    constructor(private cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Req() req: any): Promise<Cart[] | null> {
        return await this.cartService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('add')
    async addProductToCart(
        @Req() req: any, 
        @Body('cartId') cartId: number, 
        @Body('productId') productId: number, 
        @Body('amount') amount: number
    ): Promise<Cart| null> {
        
        const userId = req.User.Id;
        return await this.cartService.addProductToCart(userId, cartId, productId, amount);
    }

    @UseGuards(JwtAuthGuard)
    @Post('change')
    async changeProductAmountInCart(
        @Req() req: any, 
        @Body('cartId') cartId: number, 
        @Body('productId') productId: number, 
        @Body('amount') amount: number    
    ): Promise<Cart | null> {
        
        const userId = req.User.Id;
        return await this.cartService.changeProductAmountInCart(userId, cartId, productId, amount);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteProductFromCart(
        @Req() req: any, 
        @Body('cartId') cartId: number

    ): Promise<Cart[] | null> {
        const userId = req.User.Id;
        return await this.cartService.deleteProductFromCart(userId, cartId);
    }
}