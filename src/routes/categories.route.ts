import { Router } from 'express';
import { CategoryController } from '../controllers/category.controller';
import { Routes } from '../interfaces/routes.interface';

export class CategoryRoute implements Routes {
  public path = '/categories';
  public router = Router();
  private category = new CategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/api/v1/categories`, this.category.getCategories);
    this.router.post(`/api/v1/admin/category`, this.category.newCategory);
    this.router.delete(
      `/api/v1/admin/category/:id`,
      this.category.deleteCategory
    );
  }
} 