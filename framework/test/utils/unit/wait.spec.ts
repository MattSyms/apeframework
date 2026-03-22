import { wait } from 'utils/wait.js'

describe('waiting for a period', () => {
  test('has expected side effect', async () => {
    const timestamp = Date.now()

    await wait(1000)

    expect(Date.now()).toBeGreaterThanOrEqual(timestamp + 1000)
  })
})
