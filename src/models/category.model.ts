import { model, Schema, Types, Document } from 'mongoose';

interface ICategory extends Document {
  categoryName: string;
  nameAlias?: string;
  img?: string;
  sequence: number;
  createTime: Date;
  modifyTime: Date;
}

export const allCateItem = {
  _id: '',
  categoryName: '全部分类',
  nameAlias: 'all label',
  sequence: -1,
  img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNjAgNDQ4YTMyIDMyIDAgMCAxLTMyLTMyVjE2MC4wNjRhMzIgMzIgMCAwIDEgMzItMzJoMjU2YTMyIDMyIDAgMCAxIDMyIDMyVjQxNmEzMiAzMiAwIDAgMS0zMiAzMkgxNjB6bTQ0OCAwYTMyIDMyIDAgMCAxLTMyLTMyVjE2MC4wNjRhMzIgMzIgMCAwIDEgMzItMzJoMjU1LjkzNmEzMiAzMiAwIDAgMSAzMiAzMlY0MTZhMzIgMzIgMCAwIDEtMzIgMzJINjA4ek0xNjAgODk2YTMyIDMyIDAgMCAxLTMyLTMyVjYwOGEzMiAzMiAwIDAgMSAzMi0zMmgyNTZhMzIgMzIgMCAwIDEgMzIgMzJ2MjU2YTMyIDMyIDAgMCAxLTMyIDMySDE2MHptNDQ4IDBhMzIgMzIgMCAwIDEtMzItMzJWNjA4YTMyIDMyIDAgMCAxIDMyLTMyaDI1NS45MzZhMzIgMzIgMCAwIDEgMzIgMzJ2MjU2YTMyIDMyIDAgMCAxLTMyIDMySDYwOHoiLz48L3N2Zz4='
};

export const otherCategoryItem = {
  _id: new Types.ObjectId('5dc52b0aba304f6314a9229f'),
  categoryName: '未分类',
  nameAlias: 'other alias',
  sequence: 10001
};

const CategorySchema = new Schema<ICategory>({
  categoryName: {
    type: String,
    unique: true
  },
  nameAlias: {
    type: String
  },
  img: {
    type: String
  },
  sequence: {
    type: Number
  },
  createTime: {
    type: Date,
    default: new Date()
  },
  modifyTime: {
    type: Date,
    default: new Date()
  }
});

export const CategoryModel = model<ICategory>('Category', CategorySchema); 