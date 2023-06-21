import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  id_product: number;
  name_product: string;
  description: string;
  price: number;
  quantity_aviable: number;
  stock: boolean;
  image: string;
  until_box: boolean;

  id_category: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
