import { CategoryModel } from '../models/category.model.js'
export class CategoryController {
  async getCategories(req, res) {
    const categories = await CategoryModel.find({}, {}, { sort: 'sequence' })
    res.json(categories)
  }
  async newCategory(req, res, next) {
    const now = new Date()
    const newCateGory = req.body
    console.log(newCateGory)
    const entity = new CategoryModel({
      createTime: now,
      modifyTime: now,
      ...newCateGory
    })
    try {
      const ret = await entity.save()
      console.log('2222222222222')
      res.json(ret)
    } catch (error) {
      next(error)
    }
  }
  async deleteCategory(req, res, next) {
    const categoryId = req.params.id
    console.log('123', categoryId)
    const data = await CategoryModel.findByIdAndDelete(categoryId)
    try {
      res.status(200).json({ data, message: 'deleted' })
    } catch (error) {
      next(error)
    }
  }
}
