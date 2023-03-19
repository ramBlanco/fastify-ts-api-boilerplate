import { app } from '../../server'

export class UserRepository {
  public name(): string {
    app.instance.log.info('Something important happened!')
    return 'my name is...'
  }
}
