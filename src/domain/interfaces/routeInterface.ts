import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export interface IRoute {
  prefixRoute: string

  routes(fastify: FastifyInstance, _options: FastifyPluginOptions, _done: any): Promise<void>
}
