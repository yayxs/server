interface ResponseData<T> {
  code: number;
  message: string;
  data: T | null;
}

export class Response {
  static success<T>(data: T | null = null, message: string = '操作成功'): ResponseData<T> {
    return {
      code: 0,
      message,
      data
    };
  }

  static error(message: string = '操作失败', code: number = -1): ResponseData<null> {
    return {
      code,
      message,
      data: null
    };
  }
} 