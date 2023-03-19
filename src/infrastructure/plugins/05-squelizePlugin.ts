import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import fp from 'fastify-plugin'
import { Sequelize } from 'sequelize'
import { sequelizeOptions } from '../database/postgresql'

const sequelizePlugin = (
  fastifyInstance: FastifyInstance,
  _opts: Record<never, never>,
  done: HookHandlerDoneFunction,
) => {
  const connectionString = `postgres://${sequelizeOptions.username}:${sequelizeOptions.password}@${sequelizeOptions.host}/${sequelizeOptions.database}`
  const sequelize = new Sequelize(connectionString)

  fastifyInstance.addHook('onClose', (_, done) => sequelize.close().finally(done))

  fastifyInstance.decorate('db', sequelize)

  fastifyInstance.ready(async () => {
    try {
      await sequelize.authenticate()
      fastifyInstance.log.info('Database connection is successfully established.')
    } catch (err) {
      fastifyInstance.log.fatal(`Connection could not be established: ${err}`)
    }
  })

  done()
}

export default fp(sequelizePlugin)
