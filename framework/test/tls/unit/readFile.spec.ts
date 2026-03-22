import { readFile } from 'tls/readFile.js'

describe('reading a file', () => {
  test('returns expected value', async () => {
    expect(
      readFile('test/tls/fixture/key.pem'),
    ).toBe(`-----BEGIN PRIVATE KEY-----
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END PRIVATE KEY-----`)
  })
})

describe('reading a missing file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/tls/fixture/missing.pem')
    }).toThrow('failed reading file "test/tls/fixture/missing.pem": \
missing file')
  })
})

describe('reading an invalid file', () => {
  test('throws an error', async () => {
    expect(() => {
      readFile('test/tls/fixture')
    }).toThrow('failed reading file "test/tls/fixture":')
  })
})
