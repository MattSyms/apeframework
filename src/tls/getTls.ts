import { readFile } from './readFile.js'
import type { Tls } from './Tls.js'

const getTls = (tls?: Tls): {
  key?: string,
  cert?: string,
  ca?: string,
  rejectUnauthorized?: boolean,
} | undefined => {
  return tls
    ? {
      ...tls.key ? { key: readFile(tls.key) } : {},
      ...tls.cert ? { cert: readFile(tls.cert) } : {},
      ...tls.ca ? { ca: readFile(tls.ca) } : {},
      ...tls.verify === undefined
        ? { rejectUnauthorized: true }
        : { rejectUnauthorized: tls.verify },
    }
    : undefined
}

export {
  getTls,
}
