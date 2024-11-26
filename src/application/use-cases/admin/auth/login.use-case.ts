import { AdminRepository } from '@/infra/persistence/repositories/admin.repository';
import { LoginDto } from '@/application/dtos/admin/auth/login.dto';
import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { IAdminRepository } from '@/domain/repositories/admin.repository';
import { ResponseMapper } from '@/application/mappers/response.mapper';
import { BcryptService } from '@/infra/services/bcrypt.service';
import { JwtService } from '@/infra/config/jwt/jwt.service';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject(IAdminRepository)
    private readonly adminRepo: AdminRepository,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginDto) {
    const admin = await this.adminRepo.findByEmail(dto.email);
    if (!admin) {
      throw new NotFoundException({ data: admin, message: 'Not Found' });
    }

    const isVerify = await this.bcryptService.compare(
      dto.password,
      admin.password,
    );

    if (!isVerify)
      throw new UnauthorizedException({
        data: false,
        message: 'Login failed.',
      });

    const payload = {
      id: admin.id,
      email: admin.email,
      role: admin.role,
    };

    const accessToken: string = await this.jwtService.signAsync(payload);

    return ResponseMapper.toDTO({
      access_token: accessToken,
    });
  }
}
