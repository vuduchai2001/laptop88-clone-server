import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Spect {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

}

export type SpectDocument = HydratedDocument<Spect>;

export const SpectSchema = SchemaFactory.createForClass(Spect);