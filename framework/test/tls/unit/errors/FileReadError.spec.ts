import { FileReadError } from 'tls/errors/FileReadError.js'

describe('creating a file read error', () => {
  test('returns expected value', async () => {
    const error = new FileReadError('PATH', 'MESSAGE')

    expect(error.message).toBe('failed reading file "PATH": MESSAGE')
  })
})
