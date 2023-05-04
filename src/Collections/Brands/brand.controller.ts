import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { BrandService } from "./brand.service";
import { CreateBrandDto } from "./dto/createBrand.dto";
import { Brand } from "./brand.schema";
import mongoose, { Mongoose, ObjectId } from "mongoose";

@Controller('brand')
export class BrandController {
    constructor(private readonly brandService: BrandService) { }

    @Get('index')
    async getAll() {
        return await this.brandService.getAll();
    }

    @Post('create')
    async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
        return await this.brandService.create(createBrandDto);
    }

    @Get('getbyid')
    async getById(@Query() query: { id: number }): Promise<Brand> {
        const result = await this.brandService.getById(query.id);
        return result;
    }


}
