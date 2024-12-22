export class ResponseMapper {
  static toDTO<T>(data: T, message = '') {
    return {
      data,
      message,
    };
  }
}
