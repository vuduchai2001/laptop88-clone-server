import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class Card {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

    @Prop({ ref: 'Card' })
    parentId: number;

}

export type CardDocument = HydratedDocument<Card>;

export const CardSchema = SchemaFactory.createForClass(Card);