import { EventAttachmentUrlError } from 'mailer/errors/EventAttachmentUrlError.js'

describe('creating an event attachment url error', () => {
  test('returns expected value', async () => {
    const error = new EventAttachmentUrlError('URL')

    expect(error.message).toBe('invalid event attachment url "URL"')
  })
})
