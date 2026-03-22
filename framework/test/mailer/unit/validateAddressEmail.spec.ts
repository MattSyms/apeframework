import { validateAddressEmail } from 'mailer/validateAddressEmail.js'

describe('validating an address email', () => {
  test('succeeds', async () => {
    validateAddressEmail('foo@example.com')
  })
})

describe('validating an invalid address email', () => {
  test('throws an error', async () => {
    expect(() => {
      validateAddressEmail('foo')
    }).toThrow('invalid address email "foo"')

    expect(() => {
      validateAddressEmail('foo@')
    }).toThrow('invalid address email "foo@"')

    expect(() => {
      validateAddressEmail('foo@example')
    }).toThrow('invalid address email "foo@example"')

    expect(() => {
      validateAddressEmail('foo@example.')
    }).toThrow('invalid address email "foo@example."')

    expect(() => {
      validateAddressEmail('@example.com')
    }).toThrow('invalid address email "@example.com"')

    expect(() => {
      validateAddressEmail('example.com')
    }).toThrow('invalid address email "example.com"')

    expect(() => {
      validateAddressEmail('.com')
    }).toThrow('invalid address email ".com"')

    expect(() => {
      validateAddressEmail('foo@bar@example.com')
    }).toThrow('invalid address email "foo@bar@example.com"')

    expect(() => {
      validateAddressEmail('foo@example.com@bar')
    }).toThrow('invalid address email "foo@example.com@bar"')
  })
})
