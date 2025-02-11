import { Request, Response, NextFunction } from 'express';
import { CategoryModel } from '../models/category.model';
import { Response as ApiResponse } from '../utils/response';

export class CategoryController {
  async getCategories(req: Request, res: Response): Promise<void> {
    const categories = await CategoryModel.find({}, {}, { sort: 'sequence' });
    res.json(ApiResponse.success(categories));
  }

  async newCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    const now = new Date();
    const newCategory = req.body;
    
    const entity = new CategoryModel({
      createTime: now,
      modifyTime: now,
      ...newCategory
    });

    try {
      const result = await entity.save();
      res.json(ApiResponse.success(result));
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction): Promise<void> {
    const categoryId = req.params.id;
    try {
      const data = await CategoryModel.findByIdAndDelete(categoryId);
      res.status(200).json(ApiResponse.success(data, 'deleted'));
    } catch (error) {
      next(error);
    }
  }
} 