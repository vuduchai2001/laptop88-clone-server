import { IsNumber, IsString } from 'class-validator';

export class CreateBrandDto {
    @IsNumber()
    private _id: number;

    @IsString()
    private name: string;

    @IsString()
    private code: string;
}