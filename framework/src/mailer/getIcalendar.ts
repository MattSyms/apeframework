import { ICalCalendar } from 'ical-generator'
import type { Event } from './Event.js'
import type { ICalCalendarMethod } from 'ical-generator'

const getIcalendar = (event: Event): string => {
  const calendar = new ICalCalendar({
    method: event.method as unknown as ICalCalendarMethod,
    events: [
      {
        id: event.id,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
        summary: event.name,
        description: event.description,
        url: event.url,
        location: event.location
          ? {
            title: event.location.name,
            address: event.location.address,
            geo: event.location.geo
              ? {
                lat: event.location.geo.latitude,
                lon: event.location.geo.longitude,
              }
              : undefined,
          }
          : undefined,
        attachments: event.attachments,
      },
    ],
  })

  return calendar.toString()
}

export {
  getIcalendar,
}
