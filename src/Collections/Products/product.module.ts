import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { Product, ProductSchema } from "./Schema/product.schema";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { Brand, BrandSchema } from "../Brands/brand.schema";
import { Card, CardSchema } from "./Schema/Components/card.schema";
import { CPU, CPUSchema } from "./Schema/Components/CPU.schema";
import { HardDrive, HardDriveSchema } from "./Schema/Components/harddrive.schema";
import { RAM, RAMSchema } from "./Schema/Components/RAM.schema";
import { Screen, ScreenSchema } from "./Schema/Components/screen.schema";
import { Series, SeriesSchema } from "./Schema/Components/series.schema";
import { Spect, SpectSchema } from "./Schema/Components/spect.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: Card.name, schema: CardSchema },
    { name: CPU.name, schema: CPUSchema }, { name: HardDrive.name, schema: HardDriveSchema }, { name: RAM.name, schema: RAMSchema },
    { name: Screen.name, schema: ScreenSchema }, { name: Series.name, schema: SeriesSchema }, { name: Spect.name, schema: SpectSchema },
    { name: Brand.name, schema: BrandSchema }])],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule { }