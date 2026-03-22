import { SecretLengthError } from 'jwt/errors/SecretLengthError.js'

describe('creating a secret length error', () => {
  test('returns expected value', async () => {
    const error = new SecretLengthError()

    expect(error.message).toBe('invalid secret length')
  })
})
