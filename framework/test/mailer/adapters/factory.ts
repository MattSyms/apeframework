import { NoopMailer } from 'mailer/adapters/noop/NoopMailer.js'
import { SmtpMailer } from 'mailer/adapters/smtp/SmtpMailer.js'
import type { Mailer } from 'mailer/Mailer.js'

const createMailer = (): Mailer => {
  switch (process.env.ADAPTER) {
    case 'noop':
      return new NoopMailer()
    case 'smtp':
      return new SmtpMailer({
        host: 'maildev',
        port: 1025,
      })
    case undefined:
    default:
      throw new Error('missing or invalid adapter')
  }
}

export {
  createMailer,
}
