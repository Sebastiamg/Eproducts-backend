import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProviderDto {
  // id_provider: number;
  @IsNotEmpty()
  @IsString()
  name_provider: string;

  @IsNotEmpty()
  @IsString()
  direction: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;
}

export class UpdateProviderDto extends PartialType(ProviderDto) {}
