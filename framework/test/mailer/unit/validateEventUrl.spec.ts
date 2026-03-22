import { validateEventUrl } from 'mailer/validateEventUrl.js'

describe('validating an event url', () => {
  test('succeeds', async () => {
    validateEventUrl('http://localhost')
    validateEventUrl('http://1.2.3.4:80')
    validateEventUrl('https://example.com')
  })
})

describe('validating an invalid event url', () => {
  test('throws an error', async () => {
    expect(() => {
      validateEventUrl('example.com')
    }).toThrow('invalid event url "example.com"')

    expect(() => {
      validateEventUrl('http:example.com')
    }).toThrow('invalid event url "http:example.com"')

    expect(() => {
      validateEventUrl('foo://example.com')
    }).toThrow('invalid event url "foo://example.com"')
  })
})
