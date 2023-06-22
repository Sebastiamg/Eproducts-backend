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
