import { Algorithm } from 'cipher/Algorithm.js'
import { Cipher } from 'cipher/Cipher.js'

describe('creating a cipher using the aes128 algorithm', () => {
  test('succeeds', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES128,
      secret: 'xxxxxxxxxxxxxxxx',
    })

    expect(cipher).toBeInstanceOf(Cipher)
  })
})

describe('creating a cipher using the aes192 algorithm', () => {
  test('succeeds', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES192,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    })

    expect(cipher).toBeInstanceOf(Cipher)
  })
})

describe('creating a cipher using the aes256 algorithm', () => {
  test('succeeds', async () => {
    const cipher = new Cipher({
      algorithm: Algorithm.AES256,
      secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    })

    expect(cipher).toBeInstanceOf(Cipher)
  })
})
