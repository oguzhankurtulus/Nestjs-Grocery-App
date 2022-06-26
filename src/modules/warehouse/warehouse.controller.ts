import {
  Body,
  Controller,
  Get, Post,
  Query
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { WarehouseCreateDto } from '../../dto/warehouse.dto';
import { WarehouseService } from './warehouse.service';

@ApiTags('Product API')
@Controller('product')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  @ApiQuery({ name: 'role' })
  createNew(@Body() warehouseCreateDto: WarehouseCreateDto) {
    return this.warehouseService.createNewWarehouse(warehouseCreateDto);
  }

  @Get()
  async findAll(@Query('type') type: number): Promise<Array<string>> {
    return this.warehouseService.findAll(type);
  }
}
