import { isValidEmail } from 'utils/isValidEmail.js'

describe('validating an email', () => {
  test('returns expected value', async () => {
    expect(isValidEmail('foo@example.com')).toBe(true)

    expect(isValidEmail('foo')).toBe(false)
    expect(isValidEmail('foo@')).toBe(false)
    expect(isValidEmail('foo@example')).toBe(false)
    expect(isValidEmail('foo@example.')).toBe(false)
    expect(isValidEmail('@example.com')).toBe(false)
    expect(isValidEmail('example.com')).toBe(false)
    expect(isValidEmail('.com')).toBe(false)
    expect(isValidEmail('foo@bar@example.com')).toBe(false)
    expect(isValidEmail('foo@example.com@bar')).toBe(false)
  })
})
