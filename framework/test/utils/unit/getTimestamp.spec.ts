import { getTimestamp } from 'utils/getTimestamp.js'
import { wait } from 'utils/wait.js'

describe('getting a timestamp', () => {
  test('returns expected value', async () => {
    const ts = getTimestamp()
    const now = Date.now() / 1000

    expect(ts).toBeGreaterThan(0)
    expect(ts).toBeLessThanOrEqual(now)
  })
})

describe('getting a timestamp at different times', () => {
  test('returns expected value', async () => {
    const ts1 = getTimestamp()
    await wait(1000)
    const ts2 = getTimestamp()
    await wait(1000)
    const ts3 = getTimestamp()

    expect(ts1).toBeLessThan(ts2)
    expect(ts2).toBeLessThan(ts3)
  })
})
