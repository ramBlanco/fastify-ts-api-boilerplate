import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { LocaleService } from '../..//application/services/localeService'
import { INJECTIONS } from '../..//infrastructure/config/dependencyInjection/di'
import { app } from '../..//server'
import { IRoute } from '../../domain/interfaces/routeInterface'
import StatusController from '../controllers/statusController'

class StatusRoute implements IRoute {
  public prefixRoute = 'v1'

  async routes(fastify: FastifyInstance, _options: FastifyPluginOptions, _done: any): Promise<void> {
    const localeService = app.instance.diContainer.resolve<LocaleService>(INJECTIONS.LOCALE_SERVICE)

    fastify.get(
      '/status',
      {
        schema: {
          description: localeService.translate('routes.status.description'),
        },
      },
      StatusController.checkStatus,
    )
  }
}

export default StatusRoute
