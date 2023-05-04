import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class RAM {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

}

export type RAMDocument = HydratedDocument<RAM>;

export const RAMSchema = SchemaFactory.createForClass(RAM);