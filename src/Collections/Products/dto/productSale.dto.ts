import { IsDate, IsNumber, IsString } from 'class-validator';

export interface productSaleDto {
    _id: number;

    name: string;

    imgUrl: string;

    Price: number;

    PriceSales: number;

    isSale: boolean;
}