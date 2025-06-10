import type { CookieSerializeOptions } from '@fastify/cookie'
import type { FastifyReply } from 'fastify'

interface Response extends FastifyReply {
  cookies: Record<string, string | undefined>,

  setCookie: (
    name: string,
    value: string,
    options?: CookieSerializeOptions,
  ) => this,

  clearCookie: (
    name: string,
    options?: CookieSerializeOptions,
  ) => this,
}

export {
  type Response,
}
