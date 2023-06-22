import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from './entities/product.entity';
import { CaterogyModule } from '../caterogy/caterogy.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), CaterogyModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}