import type { Readable } from 'node:stream'

interface Attachment {
  fileName: string,
  contentType?: string,
  content: Buffer | Readable | string,
}

export {
  type Attachment,
}
