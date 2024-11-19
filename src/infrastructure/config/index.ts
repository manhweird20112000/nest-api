import { Module } from '@nestjs/common';
import { SecretModule } from './secret';

@Module({
  imports: [SecretModule],
})
export class ConfigModule {}
