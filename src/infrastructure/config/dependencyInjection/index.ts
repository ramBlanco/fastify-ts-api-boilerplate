import { diContainer } from '@fastify/awilix'
import { asClass, Lifetime } from 'awilix'
import { LocaleService } from '../../../application/services/localeService'
import { UserService } from '../../../application/services/userService'
import { LoginUseCase } from '../../../application/useCases/auth/loginUseCase'
import { UserRepository } from '../../repositories/userRepository'
import { INJECTIONS } from './di'

export function registerDependencies(): void {
  // services
  diContainer.register({ [INJECTIONS.USER_SERVICE]: asClass(UserService, { lifetime: Lifetime.SCOPED }) })
  diContainer.register({ [INJECTIONS.LOCALE_SERVICE]: asClass(LocaleService, { lifetime: Lifetime.SCOPED }) })
  // repositories
  diContainer.register({ [INJECTIONS.USER_REPOSITORY]: asClass(UserRepository, { lifetime: Lifetime.SINGLETON }) })
  // use case
  diContainer.register({ [INJECTIONS.LOGIN_USE_CASE]: asClass(LoginUseCase, { lifetime: Lifetime.SCOPED }) })
}
