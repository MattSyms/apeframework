import fs from 'fs-extra'
import { Method } from 'mailer/Method.js'
import { isValidEmail } from 'utils/isValidEmail.js'
import { wait } from 'utils/wait.js'
import { createMailer } from '../../factory.js'

describe('sending a mail', () => {
  test('returns expected value', async () => {
    const mailer = createMailer()

    const id = await mailer.send({
      from: { email: 'foo@example.com', name: 'Foo' },
      sender: { email: 'sender@example.com' },
      replyTo: { email: 'replyTo@example.com' },
      to: [
        { email: 'bar@example.com', name: 'Bar' },
        { email: 'baz@example.com', name: 'Baz' },
      ],
      cc: [{ email: 'cc@example.com' }],
      bcc: [{ email: 'bcc@example.com' }],
      subject: 'Subject',
      text: 'Hello',
      html: '<h1>Hello</h1><div><img src="cid:image.png" /></div>',
      attachments: [
        {
          fileName: 'text.txt',
          content: 'Hello',
        },
        {
          fileName: 'image.png',
          content: fs.createReadStream('test/mailer/fixture/image.png'),
        },
      ],
      event: {
        method: Method.PUBLISH,
        start: new Date('2077-01-01'),
        end: new Date('2077-01-03'),
        name: 'Hello',
      },
      list: {
        id: 'https://list.example.com/hello',
        help: 'https://list.example.com/hello/help',
        subscribe: 'https://list.example.com/hello/subscribe',
        unsubscribe: 'https://list.example.com/hello/unsubscribe',
      },
    })

    await mailer.close()

    await wait(100)

    let response = await fetch(`http://maildev:1080/email?messageId=${id}`)

    const mail = (await response.json())[0]

    const textAttachment = mail.attachments.filter((attachment: any) => {
      return attachment.fileName === 'text.txt'
    })[0]

    response = await fetch(
      `http://maildev:1080/email/${mail.id}/attachment/text.txt`,
    )

    const textData = await response.text()

    const imageAttachment = mail.attachments.filter((attachment: any) => {
      return attachment.fileName === 'image.png'
    })[0]

    response = await fetch(
      `http://maildev:1080/email/${mail.id}/attachment/image.png`,
    )

    const imageData = await response.blob()

    const eventAttachment = mail.attachments.filter((attachment: any) => {
      return attachment.fileName === 'event.ics'
    })[0]

    response = await fetch(
      `http://maildev:1080/email/${mail.id}/attachment/event.ics`,
    )

    const eventData = await response.text()

    expect(isValidEmail(id)).toBe(true)

    expect(mail.headers['message-id'])
      .toBe(`<${id}>`)

    expect(mail.headers['from'])
      .toBe('Foo <foo@example.com>')

    expect(mail.headers['sender'])
      .toBe('sender@example.com')

    expect(mail.headers['reply-to'])
      .toBe('replyTo@example.com')

    expect(mail.headers['to'])
      .toBe('Bar <bar@example.com>, Baz <baz@example.com>')

    expect(mail.headers['cc'])
      .toBe('cc@example.com')

    expect(mail.calculatedBcc[0].address)
      .toBe('bcc@example.com')

    expect(mail.headers['subject'])
      .toBe('Subject')

    expect(mail.text)
      .toBe('Hello')

    expect(mail.html)
      .toBe('<h1>Hello</h1><div><img src="cid:image.png" /></div>')

    expect(textAttachment.contentId)
      .toBe('text.txt')

    expect(textAttachment.contentType)
      .toBe('text/plain')

    expect(textData)
      .toBe('Hello')

    expect(imageAttachment.contentId)
      .toBe('image.png')

    expect(imageAttachment.contentType)
      .toBe('image/png')

    expect(imageData)
      .toStrictEqual(new Blob(
        [fs.readFileSync('test/mailer/fixture/image.png')],
        { type: 'image/png' },
      ))

    expect(eventAttachment.contentType)
      .toBe('application/ics')

    expect(eventData)
      .toContain('METHOD:PUBLISH')

    expect(eventData)
      .toContain('DTSTART:20770101T000000Z')

    expect(eventData)
      .toContain('DTEND:20770103T000000Z')

    expect(eventData)
      .toContain('SUMMARY:Hello')

    expect(mail.headers['list-id'])
      .toBe('<https://list.example.com/hello>')

    expect(mail.headers['list-help'])
      .toBe('<https://list.example.com/hello/help>')

    expect(mail.headers['list-subscribe'])
      .toBe('<https://list.example.com/hello/subscribe>')

    expect(mail.headers['list-unsubscribe'])
      .toBe('<https://list.example.com/hello/unsubscribe>')
  })
})

describe('sending a mail using an event file name', () => {
  test('returns expected value', async () => {
    const mailer = createMailer()

    const id = await mailer.send({
      from: { email: 'foo@example.com', name: 'Foo' },
      to: [
        { email: 'bar@example.com', name: 'Bar' },
        { email: 'baz@example.com', name: 'Baz' },
      ],
      subject: 'Subject',
      text: 'Hello',
      event: {
        fileName: 'hello.ics',
        method: Method.PUBLISH,
        start: new Date('2077-01-01'),
        end: new Date('2077-01-03'),
        name: 'Hello',
      },
    })

    await mailer.close()

    await wait(100)

    const response = await fetch(`http://maildev:1080/email?messageId=${id}`)

    const mail = (await response.json())[0]

    const eventAttachment = mail.attachments.filter((attachment: any) => {
      return attachment.fileName === 'hello.ics'
    })[0]

    expect(eventAttachment).toBeDefined()
  })
})
