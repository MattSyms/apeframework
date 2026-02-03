import type { OpenAPIV3 } from 'openapi-types'

interface Schema {
  params?: OpenAPIV3.SchemaObject,
  query?: OpenAPIV3.SchemaObject,
  headers?: OpenAPIV3.SchemaObject,
  body?: OpenAPIV3.RequestBodyObject,
  response?: OpenAPIV3.ResponsesObject,
}

export {
  type Schema,
}
