import { FileUploadServiceInterface } from '@/application/interfaces/file-upload-service.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as nanoid from 'nanoid';
import * as sharp from 'sharp';
import * as process from 'node:process';

@Injectable()
export class FileService implements FileUploadServiceInterface {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    const rootPath = process.cwd();
    const dirOrigin = path.join(rootPath, 'uploads', 'images', 'origins');
    const dirThumb = path.join(rootPath, 'uploads', 'images', 'thumbs');

    if (!fs.existsSync(dirOrigin)) {
      fs.mkdirSync(dirOrigin, { recursive: true });
    }

    if (!fs.existsSync(dirThumb)) {
      fs.mkdirSync(dirThumb, { recursive: true });
    }

    const name = nanoid.nanoid();

    const fileName = `${name}.${file.mimetype.split('/')[1]}`;
    const fileNameWebp = `${name}.webp`;
    const pathImageThumb = path.join(dirThumb, fileNameWebp);

    fs.writeFileSync(path.join(dirOrigin, fileName), file.buffer);
    await Promise.all([
      sharp(file.buffer)
        .toFormat('webp', { quality: 80 })
        .toFile(pathImageThumb),
    ]);
    return fileNameWebp;
  }

  previewImage(imageUrl: string): string {
    const rootPath = process.cwd();

    const pathImg = path.join(
      rootPath,
      'uploads',
      'images',
      'thumbs',
      imageUrl,
    );

    const exist = fs.existsSync(pathImg);

    if (!exist) {
      throw new NotFoundException({ data: null, message: 'Not Found' });
    }

    return pathImg;
  }
}
