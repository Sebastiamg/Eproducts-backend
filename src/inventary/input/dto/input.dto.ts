import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class InputDto {
  // id_input: number;
  @IsNotEmpty()
  @IsNumber()
  input_number: number;

  @IsNotEmpty()
  @IsString()
  input_details: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNumber()
  @IsOptional()
  id_provider: number;
}

export class UpdateInputDto extends PartialType(InputDto) {}
