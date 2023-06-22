import { Module } from '@nestjs/common';
import { OutputService } from './output.service';
import { OutputController } from './output.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Output } from './entities/output.entity';

@Module({
  controllers: [OutputController],
  providers: [OutputService],
  imports: [TypeOrmModule.forFeature([Output])],
})
export class OutputModule {}
