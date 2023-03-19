import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'

function genericPlugin(fastifyInstance: FastifyInstance, _opts: Record<never, never>, done: HookHandlerDoneFunction) {
  // hook for log request
  fastifyInstance.addHook('preHandler', (req, _reply, done) => {
    if (req.query) fastifyInstance.log.info({ query: req.query }, 'parsed query')
    if (req.body) fastifyInstance.log.info({ body: req.body }, 'parsed body')
    done()
  })

  fastifyInstance.setErrorHandler((err, _req, reply) => {
    if (err.statusCode === 429) {
      reply.code(429)
      err.message = 'You hit the rate limit!'
    }
    reply.send(err)
  })

  done()
}

export default fp(genericPlugin)
