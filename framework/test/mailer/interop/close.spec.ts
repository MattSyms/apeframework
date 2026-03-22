import { createMailer } from '../adapters/factory.js'

describe('closing a mailer', () => {
  test('succeeds', async () => {
    const mailer = createMailer()

    await mailer.send({
      from: { email: 'foo@example.com', name: 'Foo' },
      to: [
        { email: 'bar@example.com', name: 'Bar' },
        { email: 'baz@example.com', name: 'Baz' },
      ],
      subject: 'Subject',
      text: 'Hello',
    })

    await mailer.close()
  })
})
