import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Product,
  Category,
  InputDetails,
  Input,
  Output,
  Provider,
} from './entities';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Category,
      InputDetails,
      Input,
      Output,
      Provider,
    ]),
  ],
})
export class ProductModule {}
