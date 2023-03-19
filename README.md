
# Fastify Template Api

Template to create an API in Typescript, which has been created using the Fastify framework. This template uses a combination of the hexagonal structure and the service-repository pattern to organize its code.

In addition, this template includes integration with PostgreSQL to manage the application database. For ease of development, it is also configured with Docker, which allows for an independent and easy-to-configure development environment.


## Plugin

- Swagger
- Rate-limit
- JWT
- Awilix (dependency injection)


## Default routes

- `v1/status` status os server
- `v1/auth/login` User auth login
- `v1/docs/swagger` Returns json for documentation created by swagger API

## Docker

- api: node:16
- sqs: softwaremill/elasticmq-native
- s3: minio/minio
- db: postgresql:15


## Documentation

```
app
 └ src                              → Application sources
    └ @types                        → Custom types
      └ fastify                     → Type for fastify
         └ index.d.ts               → Extends fastify types and add new propierties
    └ adapters                      → Connections to thirds parties
    └ application                   → Application services layer
       └ services                   → Security tools interfaces (ex: AccessTokenManager.js, to generate and decode OAuth access token)
       └ useCases                   → Application business rules
    └ domain                        → Enterprise core business layer such as domain model objects (Aggregates, Entities, Value Objects) and repository interfaces
      └ entities                    → Entities for database
      └ interfaces                  → Interfaces and types for classes (services, repositories, requests, etc, etc)
      └ validation                  → Schemas for every request (body, query, params)
    └ infrastructure                → Drivers and tools such as Database, 
       └ config                     → Application configuration files
          └ config.ts               → All configuration consts (Database Hostname, App port, etc)
          └ whitelist.ts            → Lists of route that do not have to verify jwt token
          └ dependencyInjection     → Dependency injection config
            └ di.ts                 → Config consts names for injection
            └ index.ts              → Register dependencies
       └ database                   → Database Connection (sequelize)
          └ postgresql.ts           → Create config for postgresql
       └ repositories               → Implementation of domain repository interfaces
       └ plugins                    → Implementation of plugins
       └ webserver                  → Fastify Web server configuration
          └ server.ts               → Fastify server definition
    └ interfaces                    → Adapters and formatters for use cases and entities to external agency such as Database or the Web
       └ controllers                → Fastify route handlers
       └ routes                     → Fastify route definitions
    └ locale                        → Locale based on i18n
    └ test                          → Source folder for unit or functional tests
    └ server.ts                     → Main application entry point
 └ node_modules (generated)         → NPM dependencies
 └ docker                           → Docker configuration
   └ postgresql                     → Configuration for container postgresql
      └ .env_example                → Configuration environment variables for postgresql image
      └ Dockerfile                  → Dockerfile for postgresql container
 └ .husky                           → Husky hooks
 └ .vscode                          → Vscode settings
 

```
## Run Locally

Note: Remember to modify/create the environment variables in the .env files (`./.env` and `./docker/postgresql/.env`).

Clone the project

```bash
  git clone https://github.com/ramBlanco/fastify-ts-api-boilerplate
```

Go to the project directory

```bash
  cd fastify-ts-api-boilerplate
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  make up
```
## Tech Stack


**Server:** Node, Fastify, Docker, Sequelize, Minio, AWS, JWT


## Authors

- [@ramBlanco](https://www.github.com/ramBlanco)

