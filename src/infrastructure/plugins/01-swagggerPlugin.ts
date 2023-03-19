import swagger from '@fastify/swagger'
import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'

function swaggerPlugin(fastifyInstance: FastifyInstance, _opts: Record<never, never>, done: HookHandlerDoneFunction) {
  fastifyInstance.register(swagger, {
    prefix: '/v1/documentation',
    openapi: {
      info: {
        title: 'NunkyFinance Api',
        description: '',
        version: '0.0.1',
      },
      servers: [
        { url: 'http://localhost:4000', description: 'Local' },
        { url: 'https://nunky.com', description: 'Production' },
      ],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header',
          },
        },
      },
    },
  })
  fastifyInstance.route({
    method: 'GET',
    url: '/docs/swagger',
    handler: (_req, res) => {
      res.send(fastifyInstance.swagger())
    },
  })
  done()
}

export default fp(swaggerPlugin)
