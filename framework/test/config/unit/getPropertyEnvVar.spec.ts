import { getPropertyEnvVar } from 'config/getPropertyEnvVar.js'

describe('getting a property\'s environment variable', () => {
  test('returns expected value', async () => {
    expect(getPropertyEnvVar('f')).toBe('F')
    expect(getPropertyEnvVar('fB')).toBe('F_B')
    expect(getPropertyEnvVar('fBar')).toBe('F_BAR')

    expect(getPropertyEnvVar('fo')).toBe('FO')
    expect(getPropertyEnvVar('foB')).toBe('FO_B')
    expect(getPropertyEnvVar('foBar')).toBe('FO_BAR')

    expect(getPropertyEnvVar('foo')).toBe('FOO')
    expect(getPropertyEnvVar('fooB')).toBe('FOO_B')
    expect(getPropertyEnvVar('fooBar')).toBe('FOO_BAR')

    expect(getPropertyEnvVar('x2')).toBe('X2')
    expect(getPropertyEnvVar('x2B')).toBe('X2_B')
    expect(getPropertyEnvVar('x2Bar')).toBe('X2_BAR')

    expect(getPropertyEnvVar('x2z')).toBe('X2Z')
    expect(getPropertyEnvVar('x2zB')).toBe('X2Z_B')
    expect(getPropertyEnvVar('x2zBar')).toBe('X2Z_BAR')

    expect(getPropertyEnvVar('x23')).toBe('X23')
    expect(getPropertyEnvVar('x23B')).toBe('X23_B')
    expect(getPropertyEnvVar('x23Bar')).toBe('X23_BAR')
  })
})
