import { Body, Controller, Get, HttpStatus, Param, Post, Query, Req } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./Schema/product.schema";
import { CreateProductDto } from "./dto/createProduct.dto";
import { productSaleDto } from "./dto/productSale.dto";
import { ResponseEntity } from "src/ultis/Respones/ResponeEntity";
import { error } from "console";

@Controller( 'product' )
export class ProductController {
    constructor ( private readonly productService: ProductService ) { }

    @Get( 'index' )
    async getAll () {
        try
        {
            const data = await this.productService.getAll();
            return new ResponseEntity().setData( data ).build();
        }
        catch ( error )
        {
            return new ResponseEntity().setStatus( HttpStatus.BAD_REQUEST ).setMessage( error.message ).build();
        }
    }

    @Post( 'create' )
    async create ( @Body() createProductDto: CreateProductDto ): Promise<any> {
        try
        {
            const data = await this.productService.create( createProductDto );
            return new ResponseEntity().setData( data ).build();
        }
        catch ( error )
        {
            return new ResponseEntity().setStatus( HttpStatus.BAD_REQUEST ).setMessage( error.message ).build();
        }
    }

    @Get( 'filter' )
    async filter ( @Query() query: any ) {
        return await this.productService.filter( query );
    }

    @Get( 'getbyseries' )
    async getProductBySeries ( @Query() query: { id: number } ): Promise<any> {
        try
        {
            const data = await this.productService.getProductBySeries( query.id );
            return new ResponseEntity().setData( data ).build();
        }
        catch ( error )
        {
            return new ResponseEntity().setStatus( HttpStatus.BAD_REQUEST ).setMessage( error.message ).build();
        }
    }

    @Get( 'getsaleproduct' )
    async getSaleProduct (): Promise<productSaleDto[]> {
        try
        {
            const data = await this.productService.getSaleProduct();
            return new ResponseEntity().setData( data ).build();
        }
        catch ( error )
        {
            return new ResponseEntity().setStatus( HttpStatus.BAD_REQUEST ).setMessage( error.message ).build();
        }

    }
}
