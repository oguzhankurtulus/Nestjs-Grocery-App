import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WarehouseCreateDto } from '../../dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';

@ApiTags('Warehouse API')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  createNew(@Body() warehouseCreateDto: WarehouseCreateDto) {
    return this.warehouseService.createNewWarehouse(warehouseCreateDto);
  }
}
