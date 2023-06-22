import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { InputController } from './input.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Input, InputDetails } from './entities';

@Module({
  controllers: [InputController],
  providers: [InputService],
  imports: [TypeOrmModule.forFeature([Input, InputDetails])],
})
export class InputModule {}
