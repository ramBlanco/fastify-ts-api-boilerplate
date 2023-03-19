import { FastifyInstance } from 'fastify'
import S from 'fluent-json-schema'

export const LoginSchema = S.object()
  .id('Login')
  .prop('email', S.string().format(S.FORMATS.EMAIL))
  .required()
  .prop('password', S.string().minLength(5))
  .required()
  .title('LoginTitle')

export const LoginResponseSchema = S.object()
  .id('LoginResponse')
  .prop('email', S.string().format(S.FORMATS.EMAIL))
  .required()
  .title('LoginResponseTitle')

export const AuthSchema = (fastify: FastifyInstance): void => {
  fastify.addSchema(LoginSchema)
  fastify.addSchema(LoginResponseSchema)
}
