import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errors =
      status === HttpStatus.BAD_REQUEST ? exception.response.data : null;

    const errorResp = {
      status_code: status,
      message: exception.message || 'Internal server error',
      data: errors,
    };

    return response.status(status).json(errorResp);
  }
}
