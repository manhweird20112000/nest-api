import { Express } from 'express';

export abstract class FileUploadServiceInterface {
  abstract uploadImage(file: Express.Multer.File): Promise<string>;
  abstract previewImage(path: string): string;
}
