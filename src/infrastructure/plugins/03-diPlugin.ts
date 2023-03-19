import { fastifyAwilixPlugin } from '@fastify/awilix'
import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'

function diPlugin(fastifyInstance: FastifyInstance, _opts: Record<never, never>, done: HookHandlerDoneFunction) {
  // load injection dependency
  fastifyInstance.register(fastifyAwilixPlugin, { disposeOnClose: true, disposeOnResponse: true })
  done()
}

export default fp(diPlugin)
