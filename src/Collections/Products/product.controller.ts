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

        const data = await this.productService.getAll();
        console.log(data);
        return data;
    }

    @Post('create')
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return await this.productService.create(createProductDto);
    }

    @Get('filter')
    async filter(@Query() query: any) {

        return await this.productService.filter(query);

    }

    // @Get('paging')
    // async getPaging(@Query() query: { page: number, limit: number }) {
    //     return await this.productService.paging(query.page, query.limit);
    // }

    // @Get('search')
    // async search(@Query() query: any) {
    //     return await this.productService.search(query.keyword, query.page);
    // }



    // @Get('getbyid')
    // async getById(@Query() query: { id: string }): Promise<Brand> {
    //     const result = await this.brandService.getById(query.id);
    //     return result;
    // }


}
