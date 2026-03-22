import { EventUrlError } from 'mailer/errors/EventUrlError.js'

describe('creating an event url error', () => {
  test('returns expected value', async () => {
    const error = new EventUrlError('URL')

    expect(error.message).toBe('invalid event url "URL"')
  })
})
