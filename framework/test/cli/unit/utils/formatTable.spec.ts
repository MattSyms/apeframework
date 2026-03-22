import { EOL } from 'os'
import { formatTable } from 'cli/utils/formatTable.js'

describe('formatting a table', () => {
  test('returns expected value', async () => {
    expect(
      formatTable([]),
    ).toBe('')

    expect(
      formatTable([
        ['foo'],
      ]),
    ).toBe('  foo')

    expect(
      formatTable([
        ['foo', 'bar'],
      ]),
    ).toBe('  foo  bar')

    expect(
      formatTable([
        ['foo', 'bar'],
        ['one'],
      ]),
    ).toBe(`  foo  bar${EOL}  one`)

    expect(
      formatTable([
        ['foo', 'bar'],
        ['one', 'two'],
      ]),
    ).toBe(`  foo  bar${EOL}  one  two`)

    expect(
      formatTable([
        ['foo', 'bar'],
        ['one', 'two', 'three'],
      ]),
    ).toBe(`  foo  bar${EOL}  one  two  three`)

    expect(
      formatTable([
        ['foo', 'bar'],
        ['three', 'two', 'one'],
      ]),
    ).toBe(`  foo    bar${EOL}  three  two  one`)

    expect(
      formatTable([
        ['foo', 'bar'],
        ['', 'two', 'one'],
      ]),
    ).toBe(`  foo  bar${EOL}       two  one`)
  })
})
