import compress from '@fastify/compress'
import cookies from '@fastify/cookie'
import cors from '@fastify/cors'
import responseValidation from '@fastify/response-validation'
import swagger from '@fastify/swagger'
import fastify from 'fastify'
import { getAjv } from './getAjv.js'
import { OpenApiFormat } from './OpenApiFormat.js'
import type { ErrorHandler } from './ErrorHandler.js'
import type { Format } from './Format.js'
import type { Handler } from './Handler.js'
import type { Route } from './Route.js'
import type { FastifyInstance } from 'fastify'
import type { OpenAPIV3 } from 'openapi-types'

class Server {
  private readonly server: FastifyInstance

  private readonly host: string

  private readonly port: number | undefined

  public constructor(params: {
    host: string,
    port?: number,
    routes: Route[],
    formats?: Format[],
    trustProxy?: boolean,
    connectionTimeout?: number,
    requestTimeout?: number,
    keepAliveTimeout?: number,
    maxRequestsPerSocket?: number,
    maxParamLength?: number,
    bodyLimit?: number,
    openapi?: {
      name?: string,
      version?: string,
    },
    responseValidation?: {
      enabled?: boolean,
    },
    compression?: {
      enabled?: boolean,
      threshold?: number,
    },
    cors?: {
      enabled?: boolean,
      allowedOrigins?: string[],
      allowedMethods?: string[],
      allowedHeaders?: string[],
      exposedHeaders?: string[],
      allowCredentials?: boolean,
    },
    cookies?: {
      enabled?: boolean,
    },
    onRequest?: Handler,
    onResponse?: Handler,
    onNotFound?: Handler,
    onError?: ErrorHandler,
  }) {
    this.host = params.host
    this.port = params.port

    this.server = fastify({
      trustProxy: params.trustProxy ?? false,
      connectionTimeout: params.connectionTimeout ?? 30000,
      requestTimeout: params.requestTimeout ?? 30000,
      keepAliveTimeout: params.keepAliveTimeout ?? 30000,
      maxRequestsPerSocket: params.maxRequestsPerSocket ?? 100,
      maxParamLength: params.maxParamLength ?? 100,
      bodyLimit: params.bodyLimit ?? 1000000,
    })

    const ajv = getAjv(params.formats)

    this.server.setValidatorCompiler(({ schema }) => {
      return ajv.compile(schema)
    })

    this.server.register(swagger, {
      openapi: {
        openapi: '3.1.0',
        info: {
          title: params.openapi?.name ?? '',
          version: params.openapi?.version ?? '',
        },
      },
    })

    if (params.responseValidation?.enabled) {
      this.server.register(responseValidation, { ajv })
    }

    if (params.compression?.enabled) {
      this.server.register(compress, {
        global: true,
        threshold: params.compression.threshold ?? 1024,
      })
    }

    if (params.cors?.enabled) {
      this.server.register(cors, {
        origin: params.cors.allowedOrigins,
        methods: params.cors.allowedMethods,
        allowedHeaders: params.cors.allowedHeaders,
        exposedHeaders: params.cors.exposedHeaders,
        credentials: params.cors.allowCredentials,
      })
    }

    if (params.cookies?.enabled) {
      this.server.register(cookies)
    }

    this.server.register((server, options, done) => {
      params.routes.forEach((route) => {
        server.route({
          url: route.path,
          method: route.method,
          schema: {
            summary: route.name ?? route.path,
            description: route.description,
            ...route.schema.params ? { params: route.schema.params } : {},
            ...route.schema.query ? { query: route.schema.query } : {},
            ...route.schema.headers ? { headers: route.schema.headers } : {},
            ...route.schema.body ? { body: route.schema.body } : {},
            ...route.schema.response ? { response: route.schema.response } : {},
          },
          handler: route.handler,
        })
      })
      done()
    })

    if (params.onRequest) {
      this.server.addHook('onRequest', params.onRequest)
    }

    if (params.onResponse) {
      this.server.addHook('onResponse', params.onResponse)
    }

    if (params.onNotFound) {
      this.server.setNotFoundHandler(params.onNotFound)
    }

    if (params.onError) {
      this.server.setErrorHandler(params.onError)
    }
  }

  public async start(): Promise<string> {
    return this.server.listen({
      host: this.host,
      port: this.port,
    })
  }

  public async close(): Promise<void> {
    await this.server.close()
  }

  public openapi(format: OpenApiFormat): OpenAPIV3.Document {
    return this.server.swagger({
      yaml: format === OpenApiFormat.YAML,
    }) as OpenAPIV3.Document
  }
}

export {
  Server,
}
