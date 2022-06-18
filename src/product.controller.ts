import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Query
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UserRole } from './dto/create-product.dto';
import { ProductService } from './product.service';

@ApiTags('Product API')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiQuery({ name: 'role', enum: UserRole })
  createNew(
    @Body() createProductDto: CreateProductDto,
    @Query('role') role: UserRole = UserRole.Admin,
  ) {
    if (role === 'Moderator') {
      throw new HttpException('You are forbidden!', HttpStatus.FORBIDDEN);
    }
    return this.productService.createNew(createProductDto, role);
  }

  @Get()
  async findAll(@Query('type') type: number): Promise<Array<string>> {
    return this.productService.findAll(type);
  }
}
