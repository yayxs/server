import { BadRequestException } from '../utils/http-exception.js';

export const validationMiddleware = (schema) => {
  return (req, res, next) => {
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