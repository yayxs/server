import { AuthService } from '../services/auth.service.js'
export class AuthController {
  constructor() {
    console.log('-------', this)
  }
  async signUp(req, res, next) {
    try {
      const userData = req.body
      console.log('222', userData, this)

      // const signUpUserData = await this.auth.signup(userData)
      // console.log('333', signUpUserData)
      next()
    } catch (error) {
      console.log('12', error)
      next(error)
    }
  }
}
