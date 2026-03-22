import { getAddresses } from 'mailer/adapters/smtp/getAddresses.js'

describe('getting addresses', () => {
  test('returns expected value', async () => {
    expect(
      getAddresses(),
    ).toStrictEqual([])

    expect(
      getAddresses([]),
    ).toStrictEqual([])

    expect(
      getAddresses([
        {
          email: 'foo@example.com',
        },
        {
          email: 'bar@example.com',
        },
      ]),
    ).toStrictEqual([
      {
        address: 'foo@example.com',
        name: '',
      },
      {
        address: 'bar@example.com',
        name: '',
      },
    ])

    expect(
      getAddresses([
        {
          email: 'foo@example.com',
          name: 'Foo',
        },
        {
          email: 'bar@example.com',
          name: 'Bar',
        },
      ]),
    ).toStrictEqual([
      {
        address: 'foo@example.com',
        name: 'Foo',
      },
      {
        address: 'bar@example.com',
        name: 'Bar',
      },
    ])
  })
})
