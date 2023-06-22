import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InputDto {
  // id_input: number;
  @IsNotEmpty()
  @IsNumber()
  input_number: number;

  @IsNotEmpty()
  @IsString()
  input_details: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  // id_provider: number;
}
