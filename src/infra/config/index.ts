import { Module } from '@nestjs/common';
import { SecretModule } from './secret';
import { DatabaseModule } from '@/infra/config/database';
import { LoggerModule } from '@/infra/config/logger';
import { JWTModule } from '@/infra/config/jwt';

@Module({
  imports: [SecretModule, LoggerModule, DatabaseModule, JWTModule],
})
export class ConfigModule {}
