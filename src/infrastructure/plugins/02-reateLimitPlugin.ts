import rateLimit from '@fastify/rate-limit'
import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'

function rateLimitPlugin(fastifyInstance: FastifyInstance, _opts: Record<never, never>, done: HookHandlerDoneFunction) {
  fastifyInstance.register(rateLimit, { global: true, max: 3, timeWindow: '1 minute' })
  done()
}

export default fp(rateLimitPlugin)
