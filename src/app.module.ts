import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { AdminModule } from './admin/admin.module';
import { DataBaseSourceConfig } from './config/db.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      cache: true,
      load: [],
    }),
    TypeOrmModule.forRoot(DataBaseSourceConfig),
    ProductModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
