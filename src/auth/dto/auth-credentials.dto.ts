import { IsNotEmpty, IsString } from 'class-validator';
import { AdminDto } from 'src/admin/dto/admin.dto';

export class LogInCredentialsDto {
  @IsString()
  @IsNotEmpty()
  gmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class RegisterCredentialsDto extends AdminDto {}
