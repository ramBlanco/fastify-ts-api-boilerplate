export abstract class UseCaseBase {
  abstract handler(params: unknown): Promise<unknown>
}
