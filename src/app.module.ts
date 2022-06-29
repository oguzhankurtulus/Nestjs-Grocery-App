import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';

@Module({
  imports: [ProductModule, WarehouseModule],
})
export class AppModule {}
