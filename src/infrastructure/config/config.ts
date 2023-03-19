import dotenv from 'dotenv'
dotenv.config()

export default {
  api: {
    port: Number(process.env.API_PORT) || 4000,
    environment: process.env.ENVIRONMENT || 'PROD',
    publicApiSecretJwt: process.env.PUBLIC_API_SECRET_JWT || 'secret',
    domainName: process.env.DOMAIN_NAME || '0.0.0.0',
    defaultPageSize: Number(process.env.DEFAULT_PAGE_SIZE) || 10,
    maxPageSize: Number(process.env.MAX_PAGE_SIZE) || 200,
    defaultPage: Number(process.env.DEFAULT_PAGE) || 1,
    logger: process.env.API_LOGGER || 'production',
  },
  security: {
    jwtSecret: process.env.SECURITY_SECRET || 'secret',
  },
  database: {
    postgresPassword: process.env.POSTGRES_PASSWORD || '',
    postgresUser: process.env.POSTGRES_USER || '',
    postgresDb: process.env.POSTGRES_DB || '',
    postgresHost: process.env.POSTGRES_HOST || '',
  },
}
