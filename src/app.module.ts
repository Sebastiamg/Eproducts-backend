import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminModule } from './admin/admin.module';
import { DataBaseSourceConfig } from './config/db.source';
import { InventaryModule } from './inventary/inventary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
      load: [],
    }),
    TypeOrmModule.forRoot(DataBaseSourceConfig),
    InventaryModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
