import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Screen {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

    @Prop({ ref: 'Screen' })
    parentId: number;

}

export type ScreenDocument = HydratedDocument<Screen>;

export const ScreenSchema = SchemaFactory.createForClass(Screen);