import { Pwd } from 'pwd/Pwd.js'

describe('verifying a password', () => {
  test('returns expected value', async () => {
    const pwd = new Pwd({
      hashRounds: 3,
    })

    const hash = await pwd.hashPassword('foo')

    await expect(
      pwd.verifyPassword('foo', hash),
    ).resolves.toBe(true)

    await expect(
      pwd.verifyPassword('bar', hash),
    ).resolves.toBe(false)
  })
})

describe('verifying a password using mismatching hash rounds', () => {
  test('returns expected value', async () => {
    const pwd = new Pwd({
      hashRounds: 3,
    })

    const mismatchPwd = new Pwd({
      hashRounds: 5,
    })

    const hash = await pwd.hashPassword('foo')

    await expect(
      mismatchPwd.verifyPassword('foo', hash),
    ).resolves.toBe(true)
  })
})
