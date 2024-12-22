import { Module } from '@nestjs/common';
import { AuthModule } from '@/presentations/controllers/admin/auth/module';
import { MasterDataController } from '@/presentations/controllers/admin/master-data';
import { FileUploadServiceInterface } from '@/application/interfaces/file-upload-service.interface';
import { FileService } from '@/infra/services/file.service';

@Module({
  controllers: [MasterDataController],
  imports: [AuthModule],
  providers: [
    {
      provide: FileUploadServiceInterface,
      useClass: FileService,
    },
  ],
})
export class AdminModule {}
