import { AdminRepository } from '@/infra/persistence/repositories/admin.repository';
import { LoginDto } from '@/application/dtos/admin/auth/login.dto';
import { Inject, Injectable } from '@nestjs/common';
import { IAdminRepository } from '@/domain/repositories/admin.repository';
import { ResponseMapper } from '@/application/mappers/response.mapper';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(IAdminRepository)
    private readonly adminRepo: AdminRepository,
  ) {}

  async execute(dto: LoginDto) {
    return ResponseMapper.toDTO(true);
  }
}
