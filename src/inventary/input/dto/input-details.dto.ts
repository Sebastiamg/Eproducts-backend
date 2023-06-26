import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class InputDetailsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  incoming_quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id_input: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id_product: number;
}
