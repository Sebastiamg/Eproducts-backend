import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  // id_category: number;
  @IsString()
  @IsNotEmpty()
  name_category: string;

  @IsString()
  // @IsNotEmpty()
  @IsOptional()
  description?: string;

  // @Type(() => CategoryDto)
  // @ValidateNested()
  // @IsObject()
}

export class UpdateCategoryDto extends PartialType(CategoryDto) {}
