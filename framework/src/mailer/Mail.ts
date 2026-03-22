import type { Address } from './Address.js'
import type { Attachment } from './Attachment.js'
import type { Event } from './Event.js'
import type { List } from './List.js'

interface Mail {
  from: Address,
  sender?: Address,
  replyTo?: Address,
  to: Address[],
  cc?: Address[],
  bcc?: Address[],
  subject: string,
  text: string,
  html?: string,
  attachments?: Attachment[],
  event?: Event,
  list?: List,
}

export {
  type Mail,
}
