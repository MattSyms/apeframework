import type { Request } from './Request.js'
import type { Response } from './Response.js'

type Handler = (
  request: Request,
  response: Response,
) => Promise<void>

export {
  type Handler,
}
