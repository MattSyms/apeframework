import { parseArgs } from 'cli/parseArgs.js'

describe('parsing arguments', () => {
  test('returns expected value', async () => {
    expect(
      parseArgs([]),
    ).toStrictEqual({
      positional: [],
      optional: {},
    })

    expect(
      parseArgs(['foo', '--one', '1', 'bar', '--two', '2', '-x', '-y', '-z']),
    ).toStrictEqual({
      positional: ['foo', 'bar'],
      optional: { one: '1', two: '2', x: true, y: true, z: true },
    })

    expect(
      parseArgs(['foo', '--one=1', 'bar', '--two=2', '-xyz']),
    ).toStrictEqual({
      positional: ['foo', 'bar'],
      optional: { one: '1', two: '2', x: true, y: true, z: true },
    })

    expect(
      parseArgs(['foo', '--one-two', '3', 'bar', '-x', 'baz']),
    ).toStrictEqual({
      positional: ['foo', 'bar'],
      optional: { oneTwo: '3', x: 'baz' },
    })

    expect(
      parseArgs(['foo', '--oneTwo=3', 'bar', '-x=baz']),
    ).toStrictEqual({
      positional: ['foo', 'bar'],
      optional: { oneTwo: '3', x: 'baz' },
    })
  })
})
