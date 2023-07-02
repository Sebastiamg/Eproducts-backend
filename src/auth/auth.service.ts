import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  LogInCredentialsDto,
  RegisterCredentialsDto,
} from './dto/auth-credentials.dto';

import { compare } from 'bcrypt';

import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class AuthService {
  constructor(private readonly adminService: AdminService) {}

  async logIn({ gmail, password }: LogInCredentialsDto) {
    const admin = await this.adminService.findAdminBy(gmail);
    console.log(password, admin.password);
    if (!(await compare(password, admin.password)))
      throw new UnauthorizedException('Password or Email incorrect');

    return {
      user: admin,
      authorized: true,
    };
  }

  async register(registerCredentials: RegisterCredentialsDto) {
    return this.adminService.createAdminWith(registerCredentials);
  }
}
