import { UserModel, IUser } from '../models/users.model';

export interface IUserData {
  email: string;
  password: string;
}

export class AuthService {
  public async signup(userData: IUserData): Promise<IUser | null> {
    const findUser = await UserModel.findOne({
      email: userData.email
    });
    return findUser;
  }
} 