import { GenericService } from "src/Generic/generic.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { CPU } from "../CPU.schema";

@Injectable()
export class CPUService extends GenericService<CPU> {
    constructor(@InjectModel(CPU.name) private brandService: Model<CPU>) {
        super(brandService);
    }

}