import { UserService } from '../../../application/services/userService'
import { ILoginBodyRequest } from '../../../domain/interfaces/requests/authRequestInterface'
import { UseCaseBase } from '../../../domain/interfaces/useCaseInterface'
import { UserInterface } from '../../../domain/interfaces/userInterface'
import { INJECTIONS } from '../../../infrastructure/config/dependencyInjection/di'
import { app } from '../../../server'

export class LoginUseCase extends UseCaseBase {
  private userService = app.instance.diContainer.resolve<UserService>(INJECTIONS.USER_SERVICE)

  override async handler(user: ILoginBodyRequest): Promise<UserInterface> {
    return this.userService.getUserByEmail(user.email)
  }
}
