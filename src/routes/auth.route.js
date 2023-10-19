import { Router } from 'express'
import { AuthController } from '../controllers/auth.controller.js'
export class AuthRoute {
  path = '/'
  router = Router()
  auth = new AuthController()
  constructor() {
    this.initializeRoutes()
  }
  initializeRoutes() {
    this.router.post(`${this.path}signup`, this.auth.signUp)
  }
}
