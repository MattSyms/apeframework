import { validateListUrl } from 'mailer/validateListUrl.js'

describe('validating a list url', () => {
  test('succeeds', async () => {
    validateListUrl('subscribe', 'http://localhost')
    validateListUrl('subscribe', 'http://1.2.3.4:80')
    validateListUrl('subscribe', 'https://example.com')
  })
})

describe('validating an invalid list url', () => {
  test('throws an error', async () => {
    expect(() => {
      validateListUrl('unsubscribe', 'example.com')
    }).toThrow('invalid list unsubscribe url "example.com"')

    expect(() => {
      validateListUrl('unsubscribe', 'http:example.com')
    }).toThrow('invalid list unsubscribe url "http:example.com"')

    expect(() => {
      validateListUrl('unsubscribe', 'foo://example.com')
    }).toThrow('invalid list unsubscribe url "foo://example.com"')
  })
})
