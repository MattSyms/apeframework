import { getRandomHexString } from 'utils/getRandomHexString.js'
import { isValidHexString } from 'utils/isValidHexString.js'

describe('getting a random hex string', () => {
  test('returns expected value', async () => {
    const hexString0 = getRandomHexString(0)
    const hexString5 = getRandomHexString(5)
    const hexString10 = getRandomHexString(10)

    expect(isValidHexString(hexString0)).toBe(true)
    expect(isValidHexString(hexString5)).toBe(true)
    expect(isValidHexString(hexString10)).toBe(true)

    expect(hexString0).toHaveLength(0)
    expect(hexString5).toHaveLength(5)
    expect(hexString10).toHaveLength(10)
  })
})

describe('getting a random hex string several times', () => {
  test('returns expected value', async () => {
    const hex1 = getRandomHexString(5)
    const hex2 = getRandomHexString(5)
    const hex3 = getRandomHexString(5)

    expect(hex1).not.toStrictEqual(hex2)
    expect(hex2).not.toStrictEqual(hex3)
  })
})
