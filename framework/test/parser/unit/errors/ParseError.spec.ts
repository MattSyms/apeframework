import { ParseError } from 'parser/errors/ParseError.js'

describe('creating an input error', () => {
  test('returns expected value', async () => {
    const error = new ParseError('TYPE')

    expect(error.message).toBe('failed parsing TYPE')
  })
})
