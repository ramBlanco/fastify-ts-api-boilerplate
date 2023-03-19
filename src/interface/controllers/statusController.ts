import { FastifyReply, FastifyRequest } from 'fastify'

class StatusController {
  static async checkStatus(_request: FastifyRequest, reply: FastifyReply) {
    return reply.code(200).send(`It's alive`)
  }
}

export default StatusController
