import { Body, Controller, Post } from '@nestjs/common';
import { LoginUseCase } from '@/application/use-cases/admin/auth/login.use-case';
import { LoginDto } from '@/application/dtos/admin/auth/login.dto';

@Controller('admin/auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto);
  }
}
