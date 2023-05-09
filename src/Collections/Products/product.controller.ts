import { Body, Controller, Get, Param, Post, Query, Req } from "@nestjs/common";
import mongoose, { Mongoose, ObjectId } from "mongoose";
import { ProductService } from "./product.service";
import { Product } from "./Schema/product.schema";
import { CreateProductDto } from "./dto/createProduct.dto";
import { Request } from "express";

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

    @Get('paging')
    async getPaging(@Query() query: { page: number, limit: number }) {
        return await this.productService.paging(query.page, query.limit);
    }

    @Get('search')
    async search(@Query() query: any) {
        return await this.productService.search(query.keyword, query.price, query.page, query.limit);
    }

    @Get('filter')
    async filter(@Query() query: any) {
        console.log(query);

        return await this.productService.filter(query);
    }

    // @Get('getbyid')
    // async getById(@Query() query: { id: string }): Promise<Brand> {
    //     const result = await this.brandService.getById(query.id);
    //     return result;
    // }


}
