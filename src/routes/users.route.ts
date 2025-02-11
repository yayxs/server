import { Router } from 'express';
import { UserController } from '../controllers/users.controller';
import { Routes } from '../interfaces/routes.interface';

export class UserRoute implements Routes {
  public path = '/users';
  public router = Router();
  private user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getUsers);
    this.router.get(`/profile`, this.user.getProfile);
  }
} 