import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Product {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    Price: number;

    @Prop()
    PriceSales: number;

    @Prop()
    imgUrl: string;

    @Prop({ default: false })
    isSale: boolean;

    @Prop({ default: false })
    isOld: boolean;

    @Prop({ type: mongoose.Schema.Types.Date })
    createdAt: Date;
    //attributes
    @Prop({ ref: 'Brand' })
    BrandId: number;

    @Prop({ ref: 'Card' })
    CardId: number;

    @Prop({ ref: 'CPU' })
    CPUId: number;

    @Prop({ ref: 'HardDrive' })
    HardDriveId: number;

    @Prop({ ref: 'RAM' })
    RAMId: number;

    @Prop({ ref: 'Screen' })
    ScreenId: number;

    @Prop({ ref: 'Series' })
    SeriesId: number;

    @Prop({ ref: 'Spect' })
    SpectId: number;
}

export type ProductDocument = HydratedDocument<Product>;

export const ProductSchema = SchemaFactory.createForClass(Product);