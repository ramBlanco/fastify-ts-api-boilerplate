import { FastifyInstance } from 'fastify'
import { AuthSchema } from './authRequest'
import { UserSchema } from './userRequest'

export const registerSchemas = (instance: FastifyInstance): void => {
  UserSchema(instance)
  AuthSchema(instance)
}
