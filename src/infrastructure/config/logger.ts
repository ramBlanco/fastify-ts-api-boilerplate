export const envToLogger = {
  development: true,
  production: true,
  test: false,
}

export type ENVIRONMENTS = keyof typeof envToLogger
