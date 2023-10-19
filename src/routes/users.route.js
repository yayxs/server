import { Router } from 'express'
import { UserController } from '../controllers/users.controller.js'
export class UserRoute {
  path = '/users'
  router = Router()
  user = new UserController()
  constructor() {
    this.initializeRoutes()
  }
  initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getUsers)
    this.router.get(`/profile`, this.user.getProfile)
  }
}
