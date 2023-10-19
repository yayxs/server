import { config } from 'dotenv'
// 其中config 是一个函数
const path = `.env.${process.env.NODE_ENV || 'development'}.local`
config({ path })

export const { NODE_ENV } = process.env
