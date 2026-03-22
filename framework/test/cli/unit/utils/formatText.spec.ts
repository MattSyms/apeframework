import { EOL } from 'os'
import { formatText } from 'cli/utils/formatText.js'

describe('formatting text', () => {
  test('returns expected value', async () => {
    expect(
      formatText([]),
    ).toBe('')

    expect(
      formatText(['foo']),
    ).toBe('foo')

    expect(
      formatText(['foo', 'bar']),
    ).toBe(`foo${EOL}bar`)
  })
})
