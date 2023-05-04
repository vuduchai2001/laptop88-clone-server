import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { BrandController } from "./brand.controller";
import { BrandService } from "./brand.service";
import { Brand,BrandSchema } from "./brand.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Brand.name, schema: BrandSchema }])],
    controllers: [BrandController],
    providers: [BrandService],
})

export class BrandModule {}