import { PropertyParseError } from 'config/errors/PropertyParseError.js'

describe('creating a parse error', () => {
  test('returns expected value', async () => {
    const error = new PropertyParseError('PROPERTY', 'SOURCE', 'MESSAGE')

    expect(error.message)
      .toBe('failed parsing property "PROPERTY" from SOURCE: MESSAGE')
  })
})
