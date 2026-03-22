import { isValidEmail } from 'utils/isValidEmail.js'
import { createMailer } from '../../factory.js'

describe('sending a mail', () => {
  test('returns expected value', async () => {
    const mailer = createMailer()

    const id = await mailer.send({
      from: { email: 'foo@example.com', name: 'Foo' },
      to: [
        { email: 'bar@example.com', name: 'Bar' },
        { email: 'baz@example.com', name: 'Baz' },
      ],
      subject: 'Subject',
      text: 'Hello',
    })

    await mailer.close()

    expect(isValidEmail(id)).toBe(true)
  })
})
