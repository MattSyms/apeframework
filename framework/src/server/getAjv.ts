import { Ajv } from 'ajv'
import fastUri from 'fast-uri'
import type { Format } from './Format.js'

const getAjv = (formats?: Format[]): Ajv => {
  const ajv = new Ajv({
    addUsedSchema: false,
    allErrors: false,
    coerceTypes: 'array',
    removeAdditional: true,
    uriResolver: fastUri,
    useDefaults: true,
  })

  if (formats) {
    formats.forEach((format) => {
      ajv.addFormat(format.name, format)
    })
  }

  return ajv
}

export {
  getAjv,
}
