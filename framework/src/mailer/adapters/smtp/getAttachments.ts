import type { Attachment } from '../../Attachment.js'
import type { Readable } from 'node:stream'

interface NodemailerAttachment {
  filename: string,
  cid: string,
  contentType: string | undefined,
  content: Buffer | Readable | string,
}

const getAttachments = (attachments?: Attachment[]): NodemailerAttachment[] => {
  return attachments
    ? attachments
      .map((attachment) => {
        return {
          filename: attachment.fileName,
          cid: attachment.fileName,
          contentType: attachment.contentType,
          content: attachment.content,
        }
      })
    : []
}

export {
  getAttachments,
}
