import { getAddress } from 'mailer/adapters/smtp/getAddress.js'

describe('getting an address', () => {
  test('returns expected value', async () => {
    expect(
      getAddress(),
    ).toBeUndefined()

    expect(
      getAddress({
        email: 'foo@example.com',
      }),
    ).toStrictEqual({
      address: 'foo@example.com',
      name: '',
    })

    expect(
      getAddress({
        email: 'foo@example.com',
        name: 'Foo',
      }),
    ).toStrictEqual({
      address: 'foo@example.com',
      name: 'Foo',
    })
  })
})
