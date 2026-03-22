import type { Handler } from './Handler.js'
import type { Method } from './Method.js'
import type { Schema } from './Schema.js'

interface Route {
  method: Method,
  path: string,
  name?: string,
  description?: string,
  tags?: string[],
  schema: Schema,
  handler: Handler,
}

export {
  type Route,
}
