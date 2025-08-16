import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post()
  async login(@Body() body: { username: string; password: string }) {
    return await this.authService.login(body.username, body.password);
  }

}
