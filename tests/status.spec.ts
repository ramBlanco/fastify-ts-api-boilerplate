import { app } from '../src/server'

afterAll(() => {
  app.instance.close()
})

describe('Status test suite', () => {
  it('tests /status endpoint', async () => {
    const response = await app.instance.inject({
      method: 'GET',
      url: 'v1/status',
    })
    expect(response.body).toEqual(`It's alive`)
  })
})
