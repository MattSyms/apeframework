import { EOL } from 'os'
import { formatList } from 'cli/utils/formatList.js'

describe('formatting a list', () => {
  test('returns expected value', async () => {
    expect(
      formatList([]),
    ).toBe('')

    expect(
      formatList(['foo']),
    ).toBe('  foo')

    expect(
      formatList(['foo', 'bar']),
    ).toBe(`  foo${EOL}  bar`)
  })
})
