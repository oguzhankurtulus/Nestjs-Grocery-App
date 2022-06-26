import { Injectable } from '@nestjs/common';
import { WarehouseCreateDto } from '../../dto/warehouse.dto';

@Injectable()
export class WarehouseService {
  createNewWarehouse(warehouseCreateDto: WarehouseCreateDto) {
    console.log(warehouseCreateDto);
    return ['x'];
  }
  findAll(type: number): Array<string> {
    if (Number(type) === 1) {
      return ['a'];
    }
    return ['a', 'b'];
  }
}
