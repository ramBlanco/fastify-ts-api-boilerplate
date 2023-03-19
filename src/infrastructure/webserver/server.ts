import { join } from 'path'
import autoLoad from '@fastify/autoload'
import fastify, { FastifyInstance } from 'fastify'
import Morgan from 'morgan'
import { IRoute } from '../../domain/interfaces/routeInterface'
import { registerSchemas } from '../../domain/validation'
import config from '../config/config'
import { registerDependencies } from '../config/dependencyInjection'
import { ENVIRONMENTS, envToLogger } from '../config/logger'

Morgan.token('remote-addr', (req, _res) => {
  return req.headers['x-forwarded-for'] ? (req.headers['x-forwarded-for'] as string) : req.socket.remoteAddress
})

class App {
  public instance: FastifyInstance
  public app_domain: string = config.api.domainName
  public app_port: number = config.api.port

  constructor(appConfig: { routes: IRoute[] }) {
    registerDependencies()

    this.instance = fastify({ logger: envToLogger[config.api.logger as ENVIRONMENTS] })

    // schemas for request
    registerSchemas(this.instance)

    this.instance.register(autoLoad, { dir: join(__dirname, '../', 'plugins') })

    appConfig.routes.forEach((route) => this.instance.register(route.routes, { prefix: route.prefixRoute }))
  }

  public listen() {
    this.instance
      .listen({
        port: this.app_port,
        host: this.app_domain,
      })
      .catch((err) => {
        this.instance.log.fatal({ msg: `Application startup error`, err })
      })
      .then(() => {
        console.log(`App listening on the http://${this.app_domain}:${this.app_port} 🚀`)
      })
  }
}

export default App
