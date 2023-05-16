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

    // async getWithPoPu() {
    //     return await this.productService.find().populate('CPUId').populate('CPUId.parentId');
    // }

    // async paging(page: number, limit: number) {
    //     const [result, currentPage, totalCount] = await Promise.all([this.productService.find().populate(['CPUId', 'BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId']).skip((page - 1) * limit).limit(limit), page, this.productService.countDocuments()])
    //     return {
    //         data: result,
    //         currentPage: Number(currentPage),
    //         totalPage: Math.ceil(totalCount / limit)
    //     }
    // }



    async filter(query: any) {
        const conditions: any = {};

        if (query.name) {
            conditions.name = { $regex: new RegExp(query.name, 'i') };
        };

        if (query.isSale) {
            conditions.isSale = query.isSale;
        }

        if (query.isOld) {
            conditions.isOld = query.isOld;
        }

        if (query.Price) {
            conditions.Price = { $gte: query.Price };
        };

        if (query.PriceSales) {
            conditions.PriceSales = { $gte: query.PriceSales, $lte: query.PriceSalesmax };

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

        if (!query.page) {
            query.page = 1;
        };


        query.limit = 5;
        const sortBy = 'PriceSales';
        type SortOrder = 'asc' | 'desc';
        const sortOrder: SortOrder = query.sort === 'desc' ? 'desc' : 'asc';
        if (query.sort === 'asc' || query.sort === 'desc') {
            const [result, currentPage, totalCount] = await Promise.all([this.productService.find(conditions).populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId']).sort({ [sortBy]: sortOrder == 'desc' ? -1 : 1 }).skip((query.page - 1) * query.limit).limit(query.limit), query.page, (await this.productService.find(conditions)).length])
            return {
                data: result,
                currentPage: Number(currentPage),
                totalCount: totalCount,
                totalPage: Math.ceil(totalCount / query.limit)
            }
        }
        else if (query.sort === 'name') {
            const [result, currentPage, totalCount] = await Promise.all([this.productService.find(conditions).populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId']).sort({ name: 1 }).skip((query.page - 1) * query.limit).limit(query.limit), query.page, (await this.productService.find(conditions)).length])
            return {
                data: result,
                currentPage: Number(currentPage),
                totalCount: totalCount,
                totalPage: Math.ceil(totalCount / query.limit)
            }

        }
        else if (query.sort === 'new') {
            const [result, currentPage, totalCount] = await Promise.all([this.productService.find(conditions).populate(['BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId']).sort({ createAt: 1 }).skip((query.page - 1) * query.limit).limit(query.limit), query.page, (await this.productService.find(conditions)).length])

            return {
                data: result,
                currentPage: Number(currentPage),
                totalCount: totalCount,
                totalPage: Math.ceil(totalCount / query.limit)
            }

        }
        // if (query.sort === 'price-asc') {
        //     result.sort((a, b) => a.PriceSales - b.PriceSales)
        // }


        // else if (query.sort === 'price-desc') {
        //     result.sort((a, b) => b.PriceSales - a.PriceSales)
        // }

        // else if (query.sort === 'price') {
        //     result.sort((a, b) => a.PriceSales - b.PriceSales)
        // }

        // else if (query.sort === 'name') {
        //     result.sort((a, b) => {
        //         if (a.name < b.name) {
        //             return -1;
        //         }
        //         if (a.name > b.name) {
        //             return 1;
        //         }
        //         return 0;
        //     })
        // }

        // else if (query.sort === 'new') {
        //     result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        // }

    }
}