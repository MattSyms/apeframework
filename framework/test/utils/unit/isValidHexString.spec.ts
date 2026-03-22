import { isValidHexString } from 'utils/isValidHexString.js'

describe('validating a hex string', () => {
  test('returns expected value', async () => {
    expect(isValidHexString('')).toBe(true)
    expect(isValidHexString('0123456789abcdef')).toBe(true)

    expect(isValidHexString('ABCDEF')).toBe(false)
    expect(isValidHexString('ghijklmnopqrstuvwxyz')).toBe(false)
  })
})
