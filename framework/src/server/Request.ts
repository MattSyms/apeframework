import type { FastifyRequest } from 'fastify'

interface Request extends FastifyRequest {
  cookies: Record<string, string | undefined>,
}

export {
  type Request,
}
