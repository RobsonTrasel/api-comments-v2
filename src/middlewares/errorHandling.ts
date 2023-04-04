import { Request, Response, NextFunction } from 'express'
import { ErrorBody } from '@/interface/interface'

export const errorHandler = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || 500
  const message = err.message || 'Internal server error'
  const body: ErrorBody = {
    status,
    message
  }

  if (process.env.NODE_ENV === 'development' && err instanceof Error) {
    body.stack = err.stack;
  }

  res.status(status).json(body);
}