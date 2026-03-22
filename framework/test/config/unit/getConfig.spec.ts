import { getConfig } from 'config/getConfig.js'
import { parseString } from 'parser/parseString.js'

describe('getting a configuration', () => {
  test('returns expected value', async () => {
    expect(
      getConfig({
        properties: {},
      }),
    ).toStrictEqual({})

    expect(
      getConfig({
        properties: {
          foo: { parser: parseString },
        },
      }),
    ).toStrictEqual({
      foo: '',
    })

    expect(
      getConfig({
        properties: {
          foo: { parser: parseString, default: 'default' },
        },
      }),
    ).toStrictEqual({
      foo: 'default',
    })
  })
})

describe('getting a configuration using a file', () => {
  test('returns expected value', async () => {
    expect(
      getConfig({
        file: { path: 'test/config/fixture/config.json' },
        properties: {
          foo: { parser: parseString, default: 'default' },
        },
      }),
    ).toStrictEqual({
      foo: 'foo',
    })
  })
})

describe('getting a configuration using environment variables', () => {
  test('returns expected value', async () => {
    expect(
      getConfig({
        file: { path: 'test/config/fixture/config.json' },
        env: {
          FOO: 'baz',
        },
        properties: {
          foo: { parser: parseString, default: 'default' },
        },
      }),
    ).toStrictEqual({
      foo: 'baz',
    })
  })
})

describe('getting a configuration using command line arguments', () => {
  test('returns expected value', async () => {
    expect(
      getConfig({
        file: { path: 'test/config/fixture/config.json' },
        env: {
          FOO: 'foo',
        },
        args: {
          positional: [],
          optional: {
            foo: 'baz',
          },
        },
        properties: {
          foo: { parser: parseString, default: 'default' },
        },
      }),
    ).toStrictEqual({
      foo: 'baz',
    })
  })
})
