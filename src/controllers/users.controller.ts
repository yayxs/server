import { Request, Response } from 'express';
import { ProfileModel } from '../models/personal.model';

export class UserController {
  public async getUsers(req: Request, res: Response): Promise<void> {
    // TODO: Implement get users logic
  }

  public async getProfile(req: Request, res: Response): Promise<void> {
    const profileInfo = await ProfileModel.findOne().exec();
    res.json(profileInfo);
  }
} 