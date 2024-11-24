import { Module } from '@nestjs/common';
import { AuthModule } from '@/presentations/controllers/admin/auth/module';

@Module({
  imports: [AuthModule],
})
export class AdminModule {}
