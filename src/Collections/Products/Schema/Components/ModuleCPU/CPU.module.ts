import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { CPU, CPUSchema } from "../CPU.schema";
import { CPUController } from "./CPU.controller";
import { CPUService } from "./CPU.service";

@Module( {
    imports: [ MongooseModule.forFeature( [ { name: CPU.name, schema: CPUSchema } ] ) ],
    controllers: [ CPUController ],
    providers: [ CPUService ],
} )

export class CPUModule { }