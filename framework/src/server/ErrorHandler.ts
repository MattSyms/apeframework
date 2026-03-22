import type { Request } from './Request.js'
import type { Response } from './Response.js'
import type { FastifyError } from 'fastify'

type ErrorHandler = (
  error: FastifyError,
  request: Request,
  response: Response,
) => Promise<void>

export {
  type ErrorHandler,
}
