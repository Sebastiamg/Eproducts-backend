import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class OutputDto {
  @IsString()
  @IsNotEmpty()
  date_output: string;

  @IsNumber()
  @IsNotEmpty()
  outgoing_amount: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id_product: number;
}

export class UpdateOutputDto extends PartialType(OutputDto) {}
