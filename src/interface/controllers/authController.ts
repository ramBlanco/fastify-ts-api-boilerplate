import { FastifyReply, FastifyRequest } from 'fastify'
import { LoginUseCase } from '../../application/useCases/auth/loginUseCase'
import { ILoginBodyRequest } from '../../domain/interfaces/requests/authRequestInterface'
import { INJECTIONS } from '../../infrastructure/config/dependencyInjection/di'
import { app } from '../../server'

class AuthController {
  static async login(request: FastifyRequest<{ Body: ILoginBodyRequest }>, reply: FastifyReply) {
    const loginUseCase = app.instance.diContainer.resolve<LoginUseCase>(INJECTIONS.LOGIN_USE_CASE)
    const user = await loginUseCase.handler(request.body)
    return reply.send(user)
  }
}

export default AuthController
