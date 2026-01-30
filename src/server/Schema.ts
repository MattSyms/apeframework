import type { OpenAPIV3 } from 'openapi-types'

interface Schema {
  contentType?: string,
  params?: OpenAPIV3.SchemaObject,
  query?: OpenAPIV3.SchemaObject,
  headers?: OpenAPIV3.SchemaObject,
  body?: OpenAPIV3.SchemaObject,
  response?: Record<number, OpenAPIV3.SchemaObject>,
}

export {
  type Schema,
}
