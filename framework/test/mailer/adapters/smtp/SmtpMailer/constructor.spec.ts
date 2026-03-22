import { SmtpMailer } from 'mailer/adapters/smtp/SmtpMailer.js'

describe('creating a mailer', () => {
  test('succeeds', async () => {
    const mailer = new SmtpMailer({
      host: 'host',
      port: 0,
    })

    expect(mailer).toBeInstanceOf(SmtpMailer)
  })
})

describe('creating a mailer using a user and a password', () => {
  test('succeeds', async () => {
    const mailer = new SmtpMailer({
      host: 'host',
      port: 0,
      user: 'user',
      password: 'password',
    })

    expect(mailer).toBeInstanceOf(SmtpMailer)
  })
})
