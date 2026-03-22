import { isValidUrl } from 'utils/isValidUrl.js'

describe('validating a url', () => {
  test('returns expected value', async () => {
    expect(isValidUrl('http://localhost')).toBe(true)
    expect(isValidUrl('http://1.2.3.4:80')).toBe(true)
    expect(isValidUrl('https://example.com')).toBe(true)

    expect(isValidUrl('example.com')).toBe(false)
    expect(isValidUrl('http:example.com')).toBe(false)
    expect(isValidUrl('foo://example.com')).toBe(false)
  })
})
