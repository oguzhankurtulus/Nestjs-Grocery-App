import { Injectable } from '@nestjs/common';
import { WarehouseCreateDto } from '../../dto/warehouse.dto';

@Injectable()
export class WarehouseService {
  createNewWarehouse(warehouseCreateDto: WarehouseCreateDto) {
    console.log(warehouseCreateDto);
    return ['x'];
  }
}
