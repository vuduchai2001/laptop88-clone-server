import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./Schema/product.schema";
import { CreateProductDto } from "./dto/createProduct.dto";

@Controller( 'product' )
export class ProductController {
    constructor ( private readonly productService: ProductService ) { }

    @Get( 'index' )
    async getAll () {
        return this.productService.getAll();
    }

    // @Get('sale')
    // async getSale() {
    //     return this.productService.getSaleProduct();
    // }

    @Post( 'create' )
    async create ( @Body() createProductDto: CreateProductDto ): Promise<Product> {
        return await this.productService.create( createProductDto );
    }

    @Get( 'filter' )
    async filter ( @Query() query: any ) {
        return await this.productService.filter( query );
    }

}
