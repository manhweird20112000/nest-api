import { Module } from '@nestjs/common';
import { AuthController } from './controllers';
import { LoginUseCase } from '@/application/use-cases/admin/auth/login.use-case';
import { IAdminRepository } from '@/domain/repositories/admin.repository';
import { AdminRepository } from '@/infra/persistence/repositories/admin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '@/infra/persistence/entities/admin.entity';
import { JwtStrategy } from '@/infra/services/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    JwtStrategy,
    { provide: IAdminRepository, useClass: AdminRepository },
  ],
})
export class AuthModule {}
