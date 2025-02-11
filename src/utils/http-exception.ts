export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class NotFoundException extends HttpException {
  constructor(message: string = '未找到资源') {
    super(404, message);
  }
}

export class BadRequestException extends HttpException {
  constructor(message: string = '请求参数错误') {
    super(400, message);
  }
} 