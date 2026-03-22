import { Algorithm } from 'cipher/Algorithm.js'
import { Cipher } from 'cipher/Cipher.js'
import { isValidHexString } from 'utils/isValidHexString.js'

describe('encrypting a string', () => {
  test('returns expected value', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    const encrypted = cipher.encrypt('foo')

    expect(isValidHexString(encrypted)).toBe(true)

    expect(encrypted.length).toBeGreaterThan(0)
  })
})

describe('encrypting a string several times', () => {
  test('returns expected value', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    const encrypted1 = cipher.encrypt('foo')
    const encrypted2 = cipher.encrypt('foo')
    const encrypted3 = cipher.encrypt('foo')

    expect(isValidHexString(encrypted1)).toBe(true)
    expect(isValidHexString(encrypted2)).toBe(true)
    expect(isValidHexString(encrypted3)).toBe(true)

    expect(encrypted1.length).toBeGreaterThan(0)
    expect(encrypted2.length).toBeGreaterThan(0)
    expect(encrypted3.length).toBeGreaterThan(0)

    expect(encrypted1).not.toStrictEqual(encrypted2)
    expect(encrypted1).not.toStrictEqual(encrypted3)
  })
})
