import { IncomingMessage, Server, ServerResponse } from 'http'
import fastify from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance<HttpServer = Server, HttpRequest = IncomingMessage, HttpResponse = ServerResponse> {
    authenticate(): void
  }

  export interface FastifySchema {
    description: string
    tags?: string[]
  }
}
