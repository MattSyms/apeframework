import { isValidJwtToken } from 'utils/isValidJwtToken.js'

describe('validating a jwt token', () => {
  test('returns expected value', async () => {
    expect(
      isValidJwtToken('0123-ABCD_efgh.4567-IJKL_mnop.89-QRST_uvwxyz'),
    ).toBe(true)

    expect(
      isValidJwtToken('########.########.########'),
    ).toBe(false)

    expect(
      isValidJwtToken('11111111.22222222'),
    ).toBe(false)

    expect(
      isValidJwtToken('AAAAAAAA.BBBBBBBB.CCCCCCCC.DDDDDDDD'),
    ).toBe(false)
  })
})
