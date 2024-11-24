import { Module } from '@nestjs/common';
import { SecretModule } from './secret';
import { DatabaseModule } from '@/infrastructure/config/database';

@Module({
  imports: [SecretModule, DatabaseModule],
})
export class ConfigModule {}
