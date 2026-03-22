import { isValidGeolocation } from 'utils/isValidGeolocation.js'

describe('validating a geolocation', () => {
  test('returns expected value', async () => {
    expect(isValidGeolocation(0, 0)).toBe(true)

    expect(isValidGeolocation(-90, -180)).toBe(true)
    expect(isValidGeolocation(-90, 180)).toBe(true)
    expect(isValidGeolocation(90, -180)).toBe(true)
    expect(isValidGeolocation(90, 180)).toBe(true)

    expect(isValidGeolocation(-45.5, -90.5)).toBe(true)
    expect(isValidGeolocation(-45.5, 90.5)).toBe(true)
    expect(isValidGeolocation(45.5, -90.5)).toBe(true)
    expect(isValidGeolocation(45.5, 90.5)).toBe(true)

    expect(isValidGeolocation(-90.5, 0)).toBe(false)
    expect(isValidGeolocation(90.5, 0)).toBe(false)
    expect(isValidGeolocation(0, -180.5)).toBe(false)
    expect(isValidGeolocation(0, 180.5)).toBe(false)
  })
})
