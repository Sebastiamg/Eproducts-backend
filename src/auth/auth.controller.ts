import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  LogInCredentialsDto,
  RegisterCredentialsDto,
} from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  logIn(@Body() logInCredentials: LogInCredentialsDto) {
    return this.authService.logIn(logInCredentials);
  }

  @Post('register')
  register(@Body() registerCredentials: RegisterCredentialsDto) {
    return this.authService.register(registerCredentials);
  }
}
