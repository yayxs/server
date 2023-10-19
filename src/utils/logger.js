import { existsSync, mkdirSync } from 'fs'
// @see A logger for just about everything.
import winston from 'winston'

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    })
  )
})

export { logger }
