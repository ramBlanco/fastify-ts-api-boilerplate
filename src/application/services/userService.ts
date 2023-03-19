import { INJECTIONS } from '../../infrastructure/config/dependencyInjection/di'
import { UserRepository } from '../../infrastructure/repositories/userRepository'
import { app } from '../../server'
import { UserInterface } from '~src/domain/interfaces/userInterface'

export class UserService {
  private userRepository = app.instance.diContainer.resolve<UserRepository>(INJECTIONS.USER_REPOSITORY)

  public async sayHello(): Promise<string> {
    return this.userRepository.name()
  }

  public async getUserByEmail(email: string): Promise<UserInterface> {
    return {
      email: email,
      username: email,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }
}
