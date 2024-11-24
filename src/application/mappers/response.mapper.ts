import { HttpStatus } from '@nestjs/common';

export class ResponseMapper {
  static toDTO<T>(data: T, message = '') {
    return {
      status_code: HttpStatus.OK,
      data,
      message,
    };
  }
}
