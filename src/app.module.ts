import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InfrastructureModule } from 'src/infra';
import { AdminModule } from '@/presentations/controllers/admin/module';

@Module({
  imports: [InfrastructureModule, AdminModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
