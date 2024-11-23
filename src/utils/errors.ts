export class AppError extends Error {
    statusCode: number
    constructor(name: string, statusCode: number, message: string) {
      super(message)
      this.name = name
      this.statusCode = statusCode

      Error.captureStackTrace(this, this.constructor)
    }
  }

export const ERRORS_LIST = {
    UNAUTHORIZED: new AppError('UNAUTHORIZED', 401, 'Unauthorized access')
}