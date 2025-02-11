import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { Routes } from '../interfaces/routes.interface';

export class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  private auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, this.auth.signUp);
  }
} 