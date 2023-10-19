import { Router } from 'express'
import { CategoryController } from '../controllers/category.controller.js'
export class CategoryRoute {
  path = '/categories'
  router = Router()
  category = new CategoryController()
  constructor() {
    this.initializeRoutes()
  }
  initializeRoutes() {
    this.router.get(`/api/v1/categories`, this.category.getCategories)
    this.router.post(`/api/v1/admin/category`, this.category.newCategory)
    this.router.delete(
      `/api/v1/admin/category/:id`,
      this.category.deleteCategory
    )
  }
}
