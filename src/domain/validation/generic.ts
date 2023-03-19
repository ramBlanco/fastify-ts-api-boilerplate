import { FastifyInstance } from 'fastify'
import S, { ObjectSchema } from 'fluent-json-schema'

export const BadRequestSchemaResponse = S.object()
  .id('BadRequestSchemaResponse')
  .prop('statusCode', S.integer())
  .prop('error', S.string())
  .prop('message', S.string())
  .title('BadRequestSchemaResponseTitle')

export const ServerErrorSchemaResponse = S.object()
  .id('ServerErrorSchemaResponse')
  .prop('error', S.string())
  .prop('message', S.string())
  .title('ServerErrorSchemaResponseTitle')

const BadRequestResponse = {
  400: BadRequestSchemaResponse,
}

const ServerErrorResponse = {
  500: ServerErrorSchemaResponse,
}

export const GenericSchema = (fastify: FastifyInstance): void => {
  fastify.addSchema(BadRequestSchemaResponse)
  fastify.addSchema(ServerErrorSchemaResponse)
}

export const getSchemasResponse = (schemaResponse: ObjectSchema) => {
  return {
    200: schemaResponse,
    ...BadRequestResponse,
    ...ServerErrorResponse,
  }
}
