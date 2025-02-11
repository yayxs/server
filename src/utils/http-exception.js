export class HttpException extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export class NotFoundException extends HttpException {
  constructor(message = '未找到资源') {
    super(404, message);
  }
}

export class BadRequestException extends HttpException {
  constructor(message = '请求参数错误') {
    super(400, message);
  }
} 