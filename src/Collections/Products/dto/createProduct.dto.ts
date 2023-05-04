import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
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

    @IsNumber()
    private CreatAt: Date;

    @IsNumber()
    private BrandId: number;

    @IsNumber()
    private CardId: number;

    @IsNumber()
    private CPUId: number;

    @IsNumber()
    private HardDriveId: number;

    @IsNumber()
    private RAMId: number;

    @IsNumber()
    private ScreenId: number;

    @IsNumber()
    private SeriesId: number;

    @IsNumber()
    private SpectId: number;

}