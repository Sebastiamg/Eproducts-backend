import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
export { TypeOrmModule as MiOrModule } from '@nestjs/typeorm';

import { CategoryModule } from '../caterogy/caterogy.module';

import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
