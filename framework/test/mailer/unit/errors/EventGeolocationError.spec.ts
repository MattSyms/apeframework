import { EventGeolocationError } from 'mailer/errors/EventGeolocationError.js'

describe('creating an event geolocation error', () => {
  test('returns expected value', async () => {
    const error = new EventGeolocationError(0, 0)

    expect(error.message).toBe('invalid event geolocation "0, 0"')
  })
})
