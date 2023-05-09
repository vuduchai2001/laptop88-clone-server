import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModule } from './Collections/Brands/brand.module';
import { ProductModule } from './Collections/Products/product.module';
import { CPUModule } from './Collections/Products/Schema/Components/ModuleCPU/CPU.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/laptop88'), BrandModule, ProductModule, CPUModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
