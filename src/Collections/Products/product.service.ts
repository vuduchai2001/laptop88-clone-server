import { CPUService } from './Schema/Components/ModuleCPU/CPU.service';
import { GenericService } from "src/Generic/generic.service";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Product } from "./Schema/product.schema";
import { CPU } from './Schema/Components/CPU.schema';
import { Card } from './Schema/Components/card.schema';
import { Screen } from './Schema/Components/screen.schema';
import { productSaleDto } from './dto/productSale.dto';

@Injectable()
export class ProductService extends GenericService<Product> {
    constructor (
        @InjectModel( Product.name ) private productRepo: Model<Product>,
        @InjectModel( CPU.name ) private CPURepo: Model<CPU>,
        @InjectModel( Card.name ) private cardRepo: Model<Card>,
        @InjectModel( Screen.name ) private screenRepo: Model<Screen>,
    ) {
        super( productRepo );
    }

    async getProductBySeries ( SeriesId: number ) {
        return await this.productRepo.find( { SeriesId } );
    }

    async getSaleProduct () {
        const data = await this.productRepo.find( { isSale: true } );
        const result: productSaleDto[] = data.map( ( item ) => ( {
            _id: item._id,
            name: item.name,
            Price: item.Price,
            PriceSales: item.PriceSales,
            imgUrl: item.imgUrl,
            isSale: item.isSale,
        } ) );
        return result;
    }

    async filter ( query: any ) {
        const conditions: any = {};
        if ( query.name )
        {
            conditions.name = { $regex: new RegExp( query.name, 'i' ) };
        };
        if ( query.isSale )
        {
            conditions.isSale = query.isSale;
        };
        if ( query.isOld )
        {
            conditions.isOld = query.isOld;
        };
        if ( query.Price )
        {
            conditions.Price = { $gte: query.Price, $lte: query.Pricemax };
        };
        if ( query.PriceSales )
        {
            conditions.PriceSales = { $gte: query.PriceSales, $lte: query.PriceSalesmax };
        };
        if ( query.BrandId )
        {
            conditions.BrandId = query.BrandId;
        };
        if ( query.CardId )
        {
            let arr = [];
            const data = await this.cardRepo.find();
            data.map( ( item ) => {
                if ( item.parentId === Number( query.CardId ) )
                {
                    arr.push( item._id );
                }
            } )
            let result = [];
            for ( let i = 0; i < arr.length; ++i )
            {
                result.push( arr[ i ] );
            }
            conditions.CardId = result;
        };

        if ( query.CPUId )
        {
            let arr = [];
            const data = await this.CPURepo.find();
            data.map( ( item ) => {
                if ( item.parentId === Number( query.CPUId ) )
                {
                    arr.push( item._id );
                }
            } )
            let result = [];
            for ( let i = 0; i < arr.length; ++i )
            {
                result.push( arr[ i ] );
            }
            conditions.CPUId = result;
        };
        if ( query.RAMId )
        {
            conditions.RAMId = query.RAMId;
        };
        if ( query.ScreenId )
        {
            let arr = [];
            const data = await this.screenRepo.find();
            data.map( ( item ) => {
                if ( item.parentId === Number( query.ScreenId ) )
                {
                    arr.push( item._id );
                }
            } )
            let result = [];
            for ( let i = 0; i < arr.length; ++i )
            {
                result.push( arr[ i ] );
            }
            conditions.ScreenId = result;
        };
        if ( query.SeriesId )
        {
            conditions.SeriesId = query.SeriesId;
        };
        if ( query.SpectId )
        {
            conditions.SpectId = query.SpectId;
        };
        if ( query.HardDriveId )
        {
            conditions.HardDriveId = query.HardDriveId;
        };
        if ( !query.page )
        {
            query.page = 1;
        };
        if ( !query.sort )
        {
            query.sort = 'new';
        };
        query.limit = 5;
        console.log( query );
        if ( query.sort === 'asc' )
        {
            const [ result, currentPage, totalCount ] = await Promise.all( [ this.productRepo.find( conditions )
                .populate( [ 'BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId' ] )
                .sort( { PriceSales: 1 } ).skip( ( query.page - 1 ) * query.limit )
                .limit( query.limit ), query.page, ( await this.productRepo.find( conditions ) ).length ] )
            return {
                data: result,
                currentPage: Number( currentPage ),
                totalCount: totalCount,
                totalPage: Math.ceil( totalCount / query.limit )
            }
        }
        if ( query.sort === 'desc' )
        {
            const [ result, currentPage, totalCount ] = await Promise.all( [ this.productRepo.find( conditions )
                .populate( [ 'BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId' ] )
                .sort( { PriceSales: -1 } ).skip( ( query.page - 1 ) * query.limit )
                .limit( query.limit ), query.page, ( await this.productRepo.find( conditions ) ).length ] )
            return {
                data: result,
                currentPage: Number( currentPage ),
                totalCount: totalCount,
                totalPage: Math.ceil( totalCount / query.limit )
            }
        }
        else if ( query.sort === 'name' )
        {
            const [ result, currentPage, totalCount ] = await Promise.all( [ this.productRepo.find( conditions )
                .populate( [ 'BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId' ] )
                .sort( { name: 1 } ).skip( ( query.page - 1 ) * query.limit )
                .limit( query.limit ), query.page, ( await this.productRepo.find( conditions ) ).length ] )
            return {
                data: result,
                currentPage: Number( currentPage ),
                totalCount: totalCount,
                totalPage: Math.ceil( totalCount / query.limit )
            }

        }
        else if ( query.sort === 'new' )
        {
            const [ result, currentPage, totalCount ] = await Promise.all( [ this.productRepo.find( conditions )
                .populate( [ 'BrandId', 'CardId', 'HardDriveId', 'RAMId', 'ScreenId', 'SeriesId', 'SpectId', 'CPUId' ] )
                .sort( { createAt: 1 } ).skip( ( query.page - 1 ) * query.limit )
                .limit( query.limit ), query.page, ( await this.productRepo.find( conditions ) ).length ] )
            return {
                data: result,
                currentPage: Number( currentPage ),
                totalCount: totalCount,
                totalPage: Math.ceil( totalCount / query.limit )
            }
        }
    }
}