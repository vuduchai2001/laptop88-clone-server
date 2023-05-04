import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class CPU {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

}

export type CPUDocument = HydratedDocument<CPU>;

export const CPUSchema = SchemaFactory.createForClass(CPU);