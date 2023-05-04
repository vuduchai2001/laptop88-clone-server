import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Series {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

}

export type SeriesDocument = HydratedDocument<Series>;

export const SeriesSchema = SchemaFactory.createForClass(Series);