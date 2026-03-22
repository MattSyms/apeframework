import { randomUUID } from 'crypto'
import { initFile } from 'logger/adapters/file/initFile.js'

describe('initializing a file', () => {
  test('succeeds', async () => {
    initFile(`/tmp/log-${randomUUID()}`)
  })
})

describe('initializing a file using an empty path', () => {
  test('throws an error', async () => {
    expect(() => {
      initFile('')
    }).toThrow('failed initializing file "": empty path')
  })
})

describe('initializing a file using an invalid path', () => {
  test('throws an error', async () => {
    expect(() => {
      initFile('/tmp')
    }).toThrow('failed initializing file "/tmp":')
  })
})
