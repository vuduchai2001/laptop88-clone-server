import { GenericService } from "src/Generic/generic.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable, Req } from "@nestjs/common";
import { Product } from "./Schema/product.schema";

@Injectable()
export class ProductService extends GenericService<Product> {
    constructor(@InjectModel(Product.name) private productService: Model<Product>) {
        super(productService);
    }

    async getWithPoPu() {
        return await this.productService.find().populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId'])
    }

    async paging(page: number, limit: number) {
        const [result, currentPage, totalCount] = await Promise.all([this.productService.find().populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId']).skip((page - 1) * limit).limit(limit), page, this.productService.countDocuments()])
        return {
            data: result,
            currentPage: Number(currentPage),
            totalPage: Math.ceil(totalCount / limit)
        }
    }

    async search(key: string, price: number, page: number, limit: number) {
        const [result, currentPage, totalCount] = await Promise.all([this.productService.find({ name: { $regex: key, $options: 'i' }, Price: 30990000 }).populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId']).skip((page - 1) * limit).limit(limit), page, (await this.productService.find({ name: { $regex: key, $options: 'i' } })).length])
        return {
            data: result,
            currentPage: Number(currentPage),
            totalPage: Math.ceil(totalCount / limit)
        }
    }

    async filter(query: any) {
        const conditions: any = {};

        if (query.name) {
            conditions.name = { $regex: new RegExp(query.name, 'i') };
        };

        if (query.Price) {
            conditions.Price = { $gte: query.Price };
        };

        if (query.BrandId) {
            conditions.BrandId = query.BrandId;
        };

        if (query.BrandId) {
            conditions.BrandId = query.BrandId;
        };

        if (query.CardId) {
            conditions.CardId = query.CardId;
        };

        if (query.CPUId) {
            conditions.CPUId = query.CPUId;
        };

        if (query.RAMId) {
            conditions.RAMId = query.RAMId;
        };

        if (query.ScreenId) {
            conditions.ScreenId = query.ScreenId;
        };

        if (query.SeriesId) {
            conditions.SeriesId = query.SeriesId;
        };

        if (query.SpectId) {
            conditions.SpectId = query.SpectId;
        };

        if (query.HardDriveId) {
            conditions.HardDriveId = query.HardDriveId;
        };

        const [result, currentPage, totalCount] = await Promise.all([this.productService.find(conditions).populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId']).skip((query.page - 1) * query.limit).limit(query.limit), query.page, (await this.productService.find(conditions)).length])
        return {
            data: result,
            currentPage: Number(currentPage),
            totalCount: totalCount,
            totalPage: Math.ceil(totalCount / query.limit)
        }
    }
}