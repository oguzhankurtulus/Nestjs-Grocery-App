import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { logger } from './logger.middleware';
import { HealthModule } from './modules/health/health.module';
import { ProductModule } from './modules/product/product.module';
import { WarehouseModule } from './modules/warehouse/warehouse.module';

@Module({
  imports: [ProductModule, WarehouseModule, HealthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude({ path: 'product', method: RequestMethod.GET })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
