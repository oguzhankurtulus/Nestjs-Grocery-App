import { Injectable } from '@nestjs/common';
import { CreateProductDto, UserRole } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  createNew(createProductDto: CreateProductDto, role: UserRole) {
    console.log(createProductDto);
    console.log(role);
    if (role === 'Admin') {
      return ['x', 'y', 'z'];
    }
    return ['x'];
  }
  findAll(type: number): Array<string> {
    if (Number(type) === 1) {
      return ['a'];
    }
    return ['a', 'b'];
  }
}
