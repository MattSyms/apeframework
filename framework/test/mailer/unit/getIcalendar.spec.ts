import { Method } from 'mailer/Method.js'
import { getIcalendar } from 'mailer/getIcalendar.js'
import { isValidUuid } from 'utils/isValidUuid.js'

describe('getting an icalendar', () => {
  test('returns expected value', async () => {
    const icalendar = getIcalendar({
      method: Method.PUBLISH,
      start: new Date('2077-01-01'),
      end: new Date('2077-01-03'),
      name: 'Hello',
      description: 'Description',
      url: 'https://event.example.com/hello',
      location: {
        name: 'Location',
        address: 'Address',
      },
      attachments: [
        'https://event.example.com/hello/attachment',
      ],
    }).split('\r\n')

    const id = icalendar.filter((property) => {
      return property.startsWith('UID:')
    })[0].substring('UID:'.length)

    expect(icalendar.slice(0, 5)).toStrictEqual([
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//sebbo.net//ical-generator//EN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
    ])

    expect(icalendar.slice(-2)).toStrictEqual([
      'END:VEVENT',
      'END:VCALENDAR',
    ])

    expect(isValidUuid(id)).toBe(true)

    expect(icalendar)
      .toContain('DTSTART:20770101T000000Z')

    expect(icalendar)
      .toContain('DTEND:20770103T000000Z')

    expect(icalendar)
      .toContain('SUMMARY:Hello')

    expect(icalendar)
      .toContain('DESCRIPTION:Description')

    expect(icalendar)
      .toContain('URL;VALUE=URI:https://event.example.com/hello')

    expect(icalendar)
      .toContain('LOCATION:Location\\nAddress')

    expect(icalendar)
      .toContain('ATTACH:https://event.example.com/hello/attachment')
  })
})

describe('getting an icalendar using an event id', () => {
  test('returns expected value', async () => {
    const icalendar = getIcalendar({
      method: Method.PUBLISH,
      id: '00000000-0000-0000-0000-000000000000',
      start: new Date('2077-01-01'),
      end: new Date('2077-01-03'),
      name: 'Hello',
    }).split('\r\n')

    expect(icalendar)
      .toContain('UID:00000000-0000-0000-0000-000000000000')
  })
})

describe('getting an icalendar using an all day event', () => {
  test('returns expected value', async () => {
    const icalendar = getIcalendar({
      method: Method.PUBLISH,
      start: new Date('2077-01-01'),
      end: new Date('2077-01-03'),
      allDay: true,
      name: 'Hello',
    }).split('\r\n')

    expect(icalendar)
      .toContain('DTSTART;VALUE=DATE:20770101')

    expect(icalendar)
      .toContain('DTEND;VALUE=DATE:20770103')
  })
})

describe('getting an icalendar using an event geolocation', () => {
  test('returns expected value', async () => {
    const icalendar = getIcalendar({
      method: Method.PUBLISH,
      start: new Date('2077-01-01'),
      end: new Date('2077-01-03'),
      name: 'Hello',
      location: {
        name: 'Location',
        address: 'Address',
        geo: {
          latitude: 45.5,
          longitude: -73.5,
        },
      },
    }).split('\r\n')

    expect(icalendar)
      .toContain('GEO:45.5;-73.5')
  })
})
