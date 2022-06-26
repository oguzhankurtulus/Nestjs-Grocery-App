import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum Sizes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export class WarehouseCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  size: Sizes;

  @ApiProperty()
  city: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  @ApiPropertyOptional()
  adress: string;

  @ApiProperty()
  @ApiPropertyOptional()
  isEnabled: boolean;

  @ApiProperty({ type: [String] })
  @ApiPropertyOptional()
  productIds: string[];
}
