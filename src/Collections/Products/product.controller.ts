import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import mongoose, { Mongoose, ObjectId } from "mongoose";
import { ProductService } from "./product.service";
import { Product } from "./Schema/product.schema";
import { CreateProductDto } from "./dto/createProduct.dto";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('index')
    async getAll() {
        return await this.productService.getWithPoPu();
    }

    @Post('create')
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return await this.productService.create(createProductDto);
    }

    // @Get('getbyid')
    // async getById(@Query() query: { id: string }): Promise<Brand> {
    //     const result = await this.brandService.getById(query.id);
    //     return result;
    // }


}
