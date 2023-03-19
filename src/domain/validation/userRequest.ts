import { FastifyInstance } from 'fastify'
import S from 'fluent-json-schema'

export const CreateUserSchema = S.object()
  .id('UserCreate')
  .prop('firstName', S.string())
  .required()
  .prop('lastName', S.string())
  .required()
  .prop('email', S.string().format(S.FORMATS.EMAIL))
  .required()
  .title('UserCreateTitle')

export const UpdateUserSchema = S.object()
  .id('UpdateUserSchema')
  .prop('firstName', S.string())
  .required()
  .prop('lastName', S.string())
  .required()
  .prop('email', S.string().format(S.FORMATS.EMAIL))
  .required()
  .title('UpdateUserSchemaTitle')

export const UserSchema = (fastify: FastifyInstance): void => {
  fastify.addSchema(CreateUserSchema)
  fastify.addSchema(UpdateUserSchema)
}
