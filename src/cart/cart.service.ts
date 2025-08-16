import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'Entities/Cart';
import { Products } from 'Entities/Products';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {

    constructor(
        @InjectRepository(Cart)
        private cartRepository: Repository<Cart>,

        @InjectRepository(Products)
        private productRepository: Repository<Products>,

    ) { }

    async findAll(): Promise<Cart[]> {
        return await this.cartRepository.find();
    }

    async addProductToCart(userId: number, cartId: number, productId: number, amount: number): Promise<Cart | null> {

        const product = await this.productRepository.findOneBy({ Id: productId });
        if (!product)
            throw new NotFoundException('Product not found');

        if (cartId == 0) {
            const lastCart = await this.cartRepository.find({
                order: { cartId: 'DESC' },
                take: 1,
            });

            const lastCartEntity = lastCart.length > 0 ? lastCart[0] : null;
            cartId = lastCartEntity ? lastCartEntity.cartId + 1 : 1;
        }

        let cart = await this.cartRepository.findOne({
            where: { cartId, productId, userId }
        });

        if (!cart) {
            cart = this.cartRepository.create({
                userId,
                cartId,
                productId,
                amount,
            });
        } else {
            cart.amount += amount;
        }

        return await this.cartRepository.save(cart);
    }


    async changeProductAmountInCart(userId: number, cartId: number, productId: number, amount: number): Promise<Cart | null> {

        let cart = await this.cartRepository.findOne({
            where: { cartId, productId, userId }
        });

        if (!cart)
            throw new NotFoundException('Cart not found');

        cart.amount = amount;
        return await this.cartRepository.save(cart);
    }

    async deleteProductFromCart(userId: number, cartId: number): Promise<Cart[] | null> {

        let cart = await this.cartRepository.find({
            where: { cartId, userId }
        });

        if (!cart)
            throw new NotFoundException('Cart not found');

        return await this.cartRepository.remove(cart);

    }
}
