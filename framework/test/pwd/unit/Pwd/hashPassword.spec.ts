import { Pwd } from 'pwd/Pwd.js'

describe('hashing a password', () => {
  test('returns expected value', async () => {
    const pwd = new Pwd({
      hashRounds: 3,
    })

    const hash = await pwd.hashPassword('foo')

    expect(hash.length).toBeGreaterThan(0)
  })
})

describe('hashing a password several times', () => {
  test('returns expected value', async () => {
    const pwd = new Pwd({
      hashRounds: 3,
    })

    const hash1 = await pwd.hashPassword('foo')
    const hash2 = await pwd.hashPassword('foo')
    const hash3 = await pwd.hashPassword('foo')

    expect(hash1.length).toBeGreaterThan(0)
    expect(hash2.length).toBeGreaterThan(0)
    expect(hash3.length).toBeGreaterThan(0)

    expect(hash1).toHaveLength(hash2.length)
    expect(hash1).toHaveLength(hash3.length)

    expect(hash1).not.toBe(hash2)
    expect(hash1).not.toBe(hash3)
  })
})
