import { connect, set } from 'mongoose'
import { NODE_ENV } from '../config/index.js'
import { logger } from '../utils/logger.js'
import { CategoryModel, otherCategoryItem } from '../models/category.model.js'

/**
 * useNewUrlParser: true 和 useUnifiedTopology: true 是在使用 Mongoose 连接到 MongoDB 数据库时的两个选项。

useNewUrlParser: true 选项告诉 Mongoose 在连接过程中使用新的 URL 解析器。MongoDB 驱动程序在过去使用的 URL 解析器已被废弃，因此建议使用新的解析器。通过设置 useNewUrlParser 为 true，Mongoose 将使用新的 URL 解析器来解析 MongoDB 连接字符串。

useUnifiedTopology: true 选项启用了 MongoDB 驱动程序的新的拓扑引擎。在过去，MongoDB 驱动程序使用了旧的拓扑引擎，但现在已被废弃。通过设置 useUnifiedTopology 为 true，Mongoose 将使用新的拓扑引擎来管理 MongoDB 的连接池和服务器拓扑。

这两个选项的作用是确保在使用 Mongoose 连接到 MongoDB 时，使用最新的 URL 解析器和拓扑引擎，以提高连接的稳定性和性能。在新版本的 Mongoose 中，这两个选项的默认值已经是 true，所以你可以选择省略它们，除非你需要显式地禁用它们。
 */
export const dbConnection = async () => {
  const dbConfig = {
    url: `mongodb://localhost:27017`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

  if (NODE_ENV !== 'production') {
    set('debug', true)
  }
  try {
    await connect(dbConfig.url, dbConfig.options)
    // 设置默认数据
    CategoryModel.exists({}).then((exist) => {
      console.log('exist', exist)
      if (!exist) {
        CategoryModel.create(otherCategoryItem)
      }
    })
  } catch (error) {
    console.log('error', error)
  }
}

// let retryTimes = 5 // 重连接的次数初始化 5
// export class MongoDB {
//   static instance = null
//   _db
//   _models
//   constructor() {
//     // 连接到 MongoDB 数据库
//     this.dbConnection()

//     this._db.on('open', this.connected)
//     this._db.on('error', this.error)
//     this._models = {
//       UserModel
//     }
//   }
//   async dbConnection() {
//     const dbConfig = {
//       url: ``,
//       options: {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       }
//     }

//     if (NODE_ENV !== 'production') {
//       set('debug', true)
//     }

//     this._db = await connect(dbConfig.url, dbConfig.options)
//   }
//   connected() {
//     logger.info(`======= MongoDB连接成功 =======`)
//     retryTimes = 5
//   }
//   error() {
//     if (retryTimes > 0) {
//     } else {
//       console.error('重连失败')
//       try {
//         process.exit(1)
//       } catch (error) {}
//     }
//   }
// }
