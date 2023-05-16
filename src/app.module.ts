import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandModule } from './Collections/Brands/brand.module';
import { ProductModule } from './Collections/Products/product.module';
import { CPUModule } from './Collections/Products/Schema/Components/ModuleCPU/CPU.module';

@Module( {
  imports: [
    // MongooseModule.forRoot( 'mongodb://127.0.0.1/laptop88' ),
    MongooseModule.forRootAsync( {
      useFactory: () => ( {
        uri: 'mongodb+srv://hai13032001:Hai0345697533@laptop88-db.02aqu3z.mongodb.net/laptop88?retryWrites=true&w=majority',
        user: 'hai13032001',
        pass: 'Hai0345697533',
      } ),
    } ),
    BrandModule,
    ProductModule,
    CPUModule,
  ],
  controllers: [],
  providers: [],
} )
export class AppModule { }
