import { Module } from '@nestjs/common';
import { OutputController } from './output.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Output } from './entities/output.entity';
import { ProductModule } from '../product/product.module';

import { OutputService } from './output.service';

@Module({
  imports: [TypeOrmModule.forFeature([Output]), ProductModule],
  controllers: [OutputController],
  providers: [OutputService],
})
export class OutputModule {}
