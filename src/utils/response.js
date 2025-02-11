export class Response {
  static success(data = null, message = '操作成功') {
    return {
      code: 0,
      message,
      data
    };
  }

  static error(message = '操作失败', code = -1) {
    return {
      code,
      message,
      data: null
    };
  }
} 