import { validateEventAttachmentUrl } from 'mailer/validateEventAttachmentUrl.js'

describe('validating an event attachment url', () => {
  test('succeeds', async () => {
    validateEventAttachmentUrl('http://localhost')
    validateEventAttachmentUrl('http://1.2.3.4:80')
    validateEventAttachmentUrl('https://example.com')
  })
})

describe('validating an invalid event attachment url', () => {
  test('throws an error', async () => {
    expect(() => {
      validateEventAttachmentUrl('example.com')
    }).toThrow('invalid event attachment url "example.com"')

    expect(() => {
      validateEventAttachmentUrl('http:example.com')
    }).toThrow('invalid event attachment url "http:example.com"')

    expect(() => {
      validateEventAttachmentUrl('foo://example.com')
    }).toThrow('invalid event attachment url "foo://example.com"')
  })
})
