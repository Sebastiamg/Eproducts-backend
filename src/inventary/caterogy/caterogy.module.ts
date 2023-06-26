import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CaterogyController } from './caterogy.controller';
import { CaterogyService } from './category.service';

import { Category } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CaterogyController],
  providers: [CaterogyService],
  exports: [CaterogyService],
})
export class CategoryModule {}
