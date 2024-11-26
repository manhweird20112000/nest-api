import { Module } from '@nestjs/common';
import { SecretModule } from './secret';
import { DatabaseModule } from '@/infra/config/database';
import { LoggerModule } from '@/infra/config/logger';

@Module({
  imports: [SecretModule, LoggerModule, DatabaseModule],
})
export class ConfigModule {}
