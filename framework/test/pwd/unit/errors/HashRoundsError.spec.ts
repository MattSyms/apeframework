import { HashRoundsError } from 'pwd/errors/HashRoundsError.js'

describe('creating a hash rounds error', () => {
  test('returns expected value', async () => {
    const error = new HashRoundsError(0)

    expect(error.message).toBe('invalid hash rounds "0"')
  })
})
