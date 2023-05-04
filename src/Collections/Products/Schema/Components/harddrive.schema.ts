import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

@Schema()
export class HardDrive {

    @Prop()
    _id: number;

    @Prop()
    name: string;

    @Prop()
    code: string;

}

export type HardDriveDocument = HydratedDocument<HardDrive>;

export const HardDriveSchema = SchemaFactory.createForClass(HardDrive);