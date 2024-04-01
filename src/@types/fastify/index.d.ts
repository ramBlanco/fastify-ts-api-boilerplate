import { IncomingMessage, Server, ServerResponse } from 'http'
import 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    authenticate(): void
  }

  export interface FastifySchema {
    description: string
    tags?: string[]
  }
}
