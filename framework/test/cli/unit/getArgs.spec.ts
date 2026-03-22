import { getArgs } from 'cli/getArgs.js'

process.argv = [...process.argv, 'foo', '--bar', '3']

describe('getting the arguments', () => {
  test('returns expected value', async () => {
    const args = getArgs()

    expect(args.positional).toContain('foo')
    expect(args.optional.bar).toBe('3')
  })
})
