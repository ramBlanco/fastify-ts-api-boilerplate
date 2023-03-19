import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { LocaleService } from '../../application/services/localeService'
import { IRoute } from '../../domain/interfaces/routeInterface'
import { LoginResponseSchema, LoginSchema } from '../../domain/validation/authRequest'
import { getSchemasResponse } from '../../domain/validation/generic'
import { INJECTIONS } from '../../infrastructure/config/dependencyInjection/di'
import { app } from '../../server'
import AuthController from '../controllers/authController'

class AuthRoute implements IRoute {
  prefixRoute = 'v1/auth'
  async routes(fastify: FastifyInstance, _options: FastifyPluginOptions, _done: any): Promise<void> {
    const localeService = app.instance.diContainer.resolve<LocaleService>(INJECTIONS.LOCALE_SERVICE)

    fastify.post(
      '/login',
      {
        schema: {
          description: localeService.translate('routes.login.description'),
          body: LoginSchema,
          response: getSchemasResponse(LoginResponseSchema),
        },
      },
      AuthController.login,
    )
  }
}

export default AuthRoute
