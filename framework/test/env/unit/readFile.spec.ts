import { readFile } from 'env/readFile.js'

describe('reading a file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/env/fixture/.env'),
    ).toStrictEqual({
      FOO: 'foo',
      BAR: 'bar',
    })
  })
})

describe('reading a missing file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/env/fixture/missing.env'),
    ).toStrictEqual({})
  })
})

describe('reading a missing required file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/env/fixture/missing.env', true)
    }).toThrow('failed reading file "test/env/fixture/missing.env": \
missing file')
  })
})

describe('reading an invalid file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/env/fixture')
    }).toThrow('failed reading file "test/env/fixture":')
  })
})
