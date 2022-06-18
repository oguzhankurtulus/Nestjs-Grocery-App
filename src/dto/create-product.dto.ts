import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum UserRole {
  Admin = 'Admin',
  Moderator = 'Moderator',
  User = 'User',
}

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  @ApiPropertyOptional()
  isEnabled: boolean;

  @ApiProperty({ type: [String] })
  @ApiPropertyOptional()
  warehouses: string[];
}
