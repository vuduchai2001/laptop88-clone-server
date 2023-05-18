import { IsDate, IsNumber, IsString } from 'class-validator';

export class productSaleDto {
    @IsNumber()
    private _id: number;

    @IsString()
    private name: string;

    @IsString()
    private imgUrl: string;

    @IsNumber()
    private Price: number;

    @IsNumber()
    private PriceSales: number;

    private isSale: boolean;
}