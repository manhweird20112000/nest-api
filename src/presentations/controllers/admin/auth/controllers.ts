import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginUseCase } from '@/application/use-cases/admin/auth/login.use-case';
import { LoginDto } from '@/application/dtos/admin/auth/login.dto';
import { JwtAuthGuard } from '@/infra/guards/jwt-auth.guard';

@Controller('admin/auth')
@UseGuards(JwtAuthGuard)
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.loginUseCase.execute(dto);
  }
}
