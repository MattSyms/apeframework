import type { Location } from './Location.js'
import type { Method } from './Method.js'

interface Event {
  fileName?: string,
  method: Method,
  id?: string,
  start: Date,
  end: Date,
  allDay?: boolean,
  name: string,
  description?: string,
  url?: string,
  location?: Location,
  attachments?: string[],
}

export {
  type Event,
}
