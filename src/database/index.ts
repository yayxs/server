import { connect, set } from 'mongoose';
import { NODE_ENV } from '../config';
import { logger } from '../utils/logger';
import { CategoryModel, otherCategoryItem } from '../models/category.model';

interface DbConfig {
  url: string;
  options: {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  };
}

export const dbConnection = async (): Promise<void> => {
  const dbConfig: DbConfig = {
    url: `mongodb://localhost:27017`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  try {
    await connect(dbConfig.url, dbConfig.options);
    // 设置默认数据
    const exist = await CategoryModel.exists({});
    if (!exist) {
      await CategoryModel.create(otherCategoryItem);
    }
  } catch (error) {
    logger.error('MongoDB connection error:', error);
  }
}; 