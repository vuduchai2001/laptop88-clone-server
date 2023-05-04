import { GenericService } from "src/Generic/generic.service";
import { Brand } from "./brand.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BrandService extends GenericService<Brand> {
    constructor(@InjectModel(Brand.name) private brandService: Model<Brand>) {
        super(brandService);
    }
}