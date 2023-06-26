import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { InputController } from './input.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Input, InputDetails } from './entities';
import { ProviderModule } from '../provider/provider.module';
import { ProductModule } from '../product/product.module';

@Module({
  controllers: [InputController],
  providers: [InputService],
  imports: [
    TypeOrmModule.forFeature([Input, InputDetails]),
    ProviderModule,
    ProductModule,
  ],
})
export class InputModule {}
