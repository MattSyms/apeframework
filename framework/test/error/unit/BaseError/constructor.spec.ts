import { BaseError } from 'error/BaseError.js'

describe('creating a base error', () => {
  test('returns expected value', async () => {
    const error = new BaseError('foo')

    expect(error).toBeInstanceOf(BaseError)
    expect(error.name).toBe('BaseError')
    expect(error.message).toBe('foo')
    expect(error.stack).toBeDefined()
  })
})

describe('creating an instance of a base error\'s subclass', () => {
  test('returns expected value', async () => {
    class FooError extends BaseError {
      public constructor(message: string) {
        super(message)
      }
    }

    const error = new FooError('foo')

    expect(error).toBeInstanceOf(FooError)
    expect(error.name).toBe('FooError')
    expect(error.message).toBe('foo')
    expect(error.stack).toBeDefined()
  })
})
