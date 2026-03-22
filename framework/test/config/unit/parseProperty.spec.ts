import { parseProperty } from 'config/parseProperty.js'
import { parseString } from 'parser/parseString.js'

describe('parsing a property', () => {
  test('returns expected value', async () => {
    expect(
      parseProperty(
        'foo',
        parseString,
        'default',
        'file',
        'env',
        'args',
      ),
    ).toBe('args')

    expect(
      parseProperty(
        'foo',
        parseString,
        'default',
        'file',
        'env',
        undefined,
      ),
    ).toBe('env')

    expect(
      parseProperty(
        'foo',
        parseString,
        'default',
        'file',
        undefined,
        undefined,
      ),
    ).toBe('file')

    expect(
      parseProperty(
        'foo',
        parseString,
        'default',
        undefined,
        undefined,
        undefined,
      ),
    ).toBe('default')

    expect(
      parseProperty(
        'foo',
        parseString,
        undefined,
        undefined,
        undefined,
        undefined,
      ),
    ).toBe('')
  })
})

describe('parsing a property using an invalid value', () => {
  test('throws an error', async () => {
    expect(() => {
      parseProperty(
        'foo',
        parseString,
        undefined,
        undefined,
        undefined,
        {},
      )
    }).toThrow('failed parsing property "foo" from command line arguments: \
failed parsing string: invalid input')

    expect(() => {
      parseProperty(
        'foo',
        parseString,
        undefined,
        undefined,
        {},
        undefined,
      )
    }).toThrow('failed parsing property "foo" from environment variables: \
failed parsing string: invalid input')

    expect(() => {
      parseProperty(
        'foo',
        parseString,
        undefined,
        {},
        undefined,
        undefined,
      )
    }).toThrow('failed parsing property "foo" from configuration file: \
failed parsing string: invalid input')

    expect(() => {
      parseProperty(
        'foo',
        parseString,
        {},
        undefined,
        undefined,
        undefined,
      )
    }).toThrow('failed parsing property "foo" from default value: \
failed parsing string: invalid input')
  })
})
