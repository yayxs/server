import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private auth = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData = req.body;
      const signUpUserData = await this.auth.signup(userData);
      res.json(signUpUserData);
    } catch (error) {
      next(error);
    }
  };
} 