import { getAttachments } from 'mailer/adapters/smtp/getAttachments.js'

describe('getting attachments', () => {
  test('returns expected value', async () => {
    expect(
      getAttachments(),
    ).toStrictEqual([])

    expect(
      getAttachments([]),
    ).toStrictEqual([])

    expect(
      getAttachments([
        {
          fileName: 'foo.txt',
          contentType: 'text/plain',
          content: 'Foo',
        },
        {
          fileName: 'bar.txt',
          contentType: 'text/plain',
          content: 'Bar',
        },
      ]),
    ).toStrictEqual([
      {
        filename: 'foo.txt',
        cid: 'foo.txt',
        contentType: 'text/plain',
        content: 'Foo',
      },
      {
        filename: 'bar.txt',
        cid: 'bar.txt',
        contentType: 'text/plain',
        content: 'Bar',
      },
    ])
  })
})
