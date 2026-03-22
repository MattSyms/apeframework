import { NoopMailer } from 'mailer/adapters/noop/NoopMailer.js'

describe('creating a mailer', () => {
  test('succeeds', async () => {
    const mailer = new NoopMailer()

    expect(mailer).toBeInstanceOf(NoopMailer)
  })
})
