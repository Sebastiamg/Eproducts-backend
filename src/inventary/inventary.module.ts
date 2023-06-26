import { Module } from '@nestjs/common';
import { InventaryService } from './inventary.service';
import { InventaryController } from './inventary.controller';
import { ProviderModule } from './provider/provider.module';
import { CategoryModule } from './caterogy/caterogy.module';
import { ProductModule } from './product/product.module';
import { InputModule } from './input/input.module';
import { OutputModule } from './output/output.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category, Input, InputDetails, Output, Product, Provider } from './';

@Module({
  controllers: [InventaryController],
  providers: [InventaryService],
  imports: [
    TypeOrmModule.forFeature([
      Category,
      Input,
      InputDetails,
      Product,
      Output,
      Provider,
    ]),
    ProviderModule,
    CategoryModule,
    ProductModule,
    InputModule,
    OutputModule,
  ],
})
export class InventaryModule {}
