import {
  Controller,
  FileTypeValidator,
  Get,
  HttpStatus,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadServiceInterface } from '@/application/interfaces/file-upload-service.interface';
import { ResponseMapper } from '@/application/mappers/response.mapper';
import { Response } from 'express';

@Controller('')
export class MasterDataController {
  constructor(private readonly uploadService: FileUploadServiceInterface) {}

  @Post('admin/master-data/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const url = await this.uploadService.uploadImage(file);
    return ResponseMapper.toDTO(url, 'Photo uploaded successfully.');
  }

  @Get('image/:path')
  async previewImage(@Param('path') path: string, @Res() res: Response) {
    const image = this.uploadService.previewImage(path);
    return res.status(HttpStatus.OK).sendFile(image);
  }
}
