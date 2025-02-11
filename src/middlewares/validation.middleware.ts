import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';
import { BadRequestException } from '../utils/http-exception';

export const validationMiddleware = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        throw new BadRequestException(error.details[0].message);
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}; 