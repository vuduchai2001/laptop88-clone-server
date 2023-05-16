import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import mongoose, { Mongoose, ObjectId } from "mongoose";
import { CPUService } from "./CPU.service";

@Controller('cpu')
export class CPUController {
    constructor(private readonly brandService: CPUService) { }

}
