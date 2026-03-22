import { AddressEmailError } from 'mailer/errors/AddressEmailError.js'

describe('creating an address email error', () => {
  test('returns expected value', async () => {
    const error = new AddressEmailError('EMAIL')

    expect(error.message).toBe('invalid address email "EMAIL"')
  })
})
