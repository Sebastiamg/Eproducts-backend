import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class OutputDto {
  // id_output: number;
  @IsDate()
  @IsNotEmpty()
  date_output: Date;

  @IsNumber()
  @IsNotEmpty()
  outgoing_amount: number;

  // id_product: number;
}
