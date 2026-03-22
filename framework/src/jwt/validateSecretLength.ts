import { Algorithm } from './Algorithm.js'
import { SecretLengthError } from './errors/SecretLengthError.js'

const minSecretLength = {
  [Algorithm.HS256]: 32,
  [Algorithm.HS384]: 48,
  [Algorithm.HS512]: 64,
}

const validateSecretLength = (algorithm: Algorithm, secret: string): void => {
  if (Buffer.from(secret).length < minSecretLength[algorithm]) {
    throw new SecretLengthError()
  }
}

export {
  validateSecretLength,
}
