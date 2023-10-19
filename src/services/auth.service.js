import { UserModel } from '../models/users.model.js'
export class AuthService {
  async signup(userData) {
    const findUser = await UserModel.findOne({
      email: userData.email
    })
    console.log('---', findUser)
  }
}
