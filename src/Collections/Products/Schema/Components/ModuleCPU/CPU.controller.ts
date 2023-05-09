import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import mongoose, { Mongoose, ObjectId } from "mongoose";
import { CPUService } from "./CPU.service";

@Controller('cpu')
export class CPUController {
    constructor(private readonly brandService: CPUService) { }

    @Get('index')
    async getAll() {
        return await this.brandService.getWithPoPu();
    }

    // @Post('create')
    // async create(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    //     return await this.brandService.create(createBrandDto);
    // }

    // @Get('getbyid')
    // async getById(@Query() query: { id: number }): Promise<Brand> {
    //     const result = await this.brandService.getById(query.id);
    //     return result;
    // }


}
