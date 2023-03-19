import { FastifyPluginAsync } from 'fastify'
import { UserService } from '../../application/services/userService'
import { INJECTIONS } from '../../infrastructure/config/dependencyInjection/di'

const controller: FastifyPluginAsync = async (instance, _opts) => {
  instance.get('/hello', async (request, reply) => {
    const userService = request.diScope.resolve<UserService>(INJECTIONS.USER_SERVICE)
    reply.send(await userService.sayHello())
  })
}

export default controller
export const autoPrefix = '/v1'
