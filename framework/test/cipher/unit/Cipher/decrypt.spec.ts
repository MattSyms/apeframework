import { Algorithm } from 'cipher/Algorithm.js'
import { Cipher } from 'cipher/Cipher.js'

describe('decrypting a string', () => {
  test('returns expected value', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    const encrypted = cipher.encrypt('foo')
    const decrypted = cipher.decrypt(encrypted)

    expect(decrypted).toBe('foo')
  })
})

describe('decrypting a string using a mismatching algorithm', () => {
  test('throws an error', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    const mismatchCipher = new Cipher({
      algorithm: Algorithm.AES256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    })

    const encrypted = cipher.encrypt('foo')

    expect(() => {
      mismatchCipher.decrypt(encrypted)
    }).toThrow('failed decrypting string:')
  })
})

describe('decrypting a string using a mismatching secret', () => {
  test('throws an error', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    const mismatchCipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'yyyyyyyyyyyyyyyy',
    })

    const encrypted = cipher.encrypt('foo')

    expect(() => {
      mismatchCipher.decrypt(encrypted)
    }).toThrow('failed decrypting string:')
  })
})
