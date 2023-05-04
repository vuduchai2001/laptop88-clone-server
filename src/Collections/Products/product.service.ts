import { GenericService } from "src/Generic/generic.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Product } from "./Schema/product.schema";

@Injectable()
export class ProductService extends GenericService<Product> {
    constructor(@InjectModel(Product.name) private productService: Model<Product>) {
        super(productService);
    }

    async getWithPoPu() {
        return await this.productService.find().populate(['BrandId', 'CardId'])
    }
}