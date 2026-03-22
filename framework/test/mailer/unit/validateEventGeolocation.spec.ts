import { validateEventGeolocation } from 'mailer/validateEventGeolocation.js'

describe('validating an event geolocation', () => {
  test('succeeds', async () => {
    validateEventGeolocation(0, 0)

    validateEventGeolocation(-90, -180)
    validateEventGeolocation(-90, 180)
    validateEventGeolocation(90, -180)
    validateEventGeolocation(90, 180)

    validateEventGeolocation(-45.5, -90.5)
    validateEventGeolocation(-45.5, 90.5)
    validateEventGeolocation(45.5, -90.5)
    validateEventGeolocation(45.5, 90.5)
  })
})

describe('validating an invalid event geolocation', () => {
  test('throws an error', async () => {
    expect(() => {
      validateEventGeolocation(-90.5, 0)
    }).toThrow('invalid event geolocation "-90.5, 0"')

    expect(() => {
      validateEventGeolocation(90.5, 0)
    }).toThrow('invalid event geolocation "90.5, 0"')

    expect(() => {
      validateEventGeolocation(0, -180.5)
    }).toThrow('invalid event geolocation "0, -180.5"')

    expect(() => {
      validateEventGeolocation(0, 180.5)
    }).toThrow('invalid event geolocation "0, 180.5"')
  })
})
