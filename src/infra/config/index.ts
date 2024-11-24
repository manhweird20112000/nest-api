import { Module } from '@nestjs/common';
import { SecretModule } from './secret';
import { DatabaseModule } from '@/infra/config/database';

@Module({
  imports: [SecretModule, DatabaseModule],
})
export class ConfigModule {}
