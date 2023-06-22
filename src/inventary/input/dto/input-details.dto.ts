import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class InputDetailsDto {
  // id_input_details: number;
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  incoming_quantity: number;

  // id_input: number;
  // id_product: number;
}
