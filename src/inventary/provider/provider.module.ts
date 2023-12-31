import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { Provider } from '../';

@Module({
  controllers: [ProviderController],
  providers: [ProviderService],
  imports: [TypeOrmModule.forFeature([Provider])],
  exports: [ProviderService],
})
export class ProviderModule {}
