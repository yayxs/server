import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/http-exception';

export const ErrorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.status || 500;
    const message: string = error.message || '服务器错误';

    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
}; 