import { createUnitParser } from './factories/unit/createUnitParser.js'

const parseBytes = createUnitParser({
  type: 'bytes',
  units: [
    {
      symbol: 'B',
      value: 1,
    },
    {
      symbol: 'kB',
      value: 1000,
    },
    {
      symbol: 'MB',
      value: 1000000,
    },
    {
      symbol: 'GB',
      value: 1000000000,
    },
    {
      symbol: 'TB',
      value: 1000000000000,
    },
    {
      symbol: 'PB',
      value: 1000000000000000,
    },
    {
      symbol: 'KiB',
      value: 1024,
    },
    {
      symbol: 'MiB',
      value: 131072,
    },
    {
      symbol: 'GiB',
      value: 134200000,
    },
    {
      symbol: 'TiB',
      value: 137400000000,
    },
    {
      symbol: 'PiB',
      value: 140700000000000,
    },
  ],
})

export {
  parseBytes,
}
