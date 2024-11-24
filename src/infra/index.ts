import { Global, Module } from '@nestjs/common';
import { ConfigModule } from './config';

@Global()
@Module({
  imports: [ConfigModule],
})
export class InfrastructureModule {}
