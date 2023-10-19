export const ErrorMiddleware = (error, req, res, next) => {
  try {
    const status = error.status || 500
    const message = error.message || '服务器错误'

    res.status(status).json({ message })
  } catch (error) {
    next(error)
  }
}
