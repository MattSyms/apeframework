import { isValidUuid } from 'utils/isValidUuid.js'

describe('validating a uuid', () => {
  test('returns expected value', async () => {
    expect(isValidUuid('00000000-0000-0000-0000-000000000000')).toBe(true)
    expect(isValidUuid('01234567-89ab-cdef-0123-456789abcdef')).toBe(true)
    expect(isValidUuid('ffffffff-ffff-ffff-ffff-ffffffffffff')).toBe(true)

    expect(isValidUuid('00000000-0000-0000-0000-00000000000')).toBe(false)
    expect(isValidUuid('00000000-0000-0000-0000-0000000000000')).toBe(false)
    expect(isValidUuid('ffffffff-ffff-ffff-ffff-fffffffffffF')).toBe(false)
    expect(isValidUuid('ffffffff-ffff-ffff-ffff-fffffffffffg')).toBe(false)
  })
})
