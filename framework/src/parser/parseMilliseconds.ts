import { createUnitParser } from './factories/unit/createUnitParser.js'

const parseMilliseconds = createUnitParser({
  type: 'milliseconds',
  units: [
    {
      symbol: 'ms',
      value: 1,
    },
    {
      symbol: 's',
      value: 1000,
    },
    {
      symbol: 'm',
      value: 60000,
    },
    {
      symbol: 'h',
      value: 3600000,
    },
    {
      symbol: 'd',
      value: 86400000,
    },
  ],
})

export {
  parseMilliseconds,
}
