import jwt from '@fastify/jwt'
import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'
import config from '../config/config'
import whiteList from '../config/whitelist'

function jwtPlugin(fastifyInstance: FastifyInstance, _opts: Record<never, never>, done: HookHandlerDoneFunction) {
  fastifyInstance.register(jwt, {
    secret: config.security.jwtSecret,
    sign: {
      expiresIn: '5m',
    },
  })

  fastifyInstance.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const isWhiteListed = whiteList.some((trustedUrl) => request.url.includes(trustedUrl))
      if (!isWhiteListed) {
        await request.jwtVerify()
      }
    } catch (err) {
      reply.send(err)
    }
  })
  done()
}

export default fp(jwtPlugin)
