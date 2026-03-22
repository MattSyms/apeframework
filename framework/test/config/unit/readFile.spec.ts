import { readFile } from 'config/readFile.js'

describe('reading a file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/config/fixture/config.json'),
    ).toStrictEqual({
      foo: 'foo',
      bar: 'bar',
    })
  })
})

describe('reading a missing file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/config/fixture/missing.json'),
    ).toStrictEqual({})
  })
})

describe('reading a missing required file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/config/fixture/missing.json', true)
    }).toThrow('failed reading file \
"test/config/fixture/missing.json": missing file')
  })
})

describe('reading an invalid file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/config/fixture')
    }).toThrow('failed reading file \
"test/config/fixture":')

    expect(() => {
      readFile('test/config/fixture/invalid/array.json')
    }).toThrow('failed reading file \
"test/config/fixture/invalid/array.json": invalid content')

    expect(() => {
      readFile('test/config/fixture/invalid/boolean.json')
    }).toThrow('failed reading file \
"test/config/fixture/invalid/boolean.json": invalid content')

    expect(() => {
      readFile('test/config/fixture/invalid/null.json')
    }).toThrow('failed reading file \
"test/config/fixture/invalid/null.json": invalid content')

    expect(() => {
      readFile('test/config/fixture/invalid/number.json')
    }).toThrow('failed reading file \
"test/config/fixture/invalid/number.json": invalid content')

    expect(() => {
      readFile('test/config/fixture/invalid/string.json')
    }).toThrow('failed reading file \
"test/config/fixture/invalid/string.json": invalid content')
  })
})
