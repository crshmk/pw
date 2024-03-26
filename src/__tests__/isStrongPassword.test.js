import { isStrongPassword } from '../isStrongPassword'

describe('isStrongPassword util', () => {
  test('at least one digit', () => {
    expect(isStrongPassword('asdfasdfasdfA$')).toBe(false)
    expect(isStrongPassword('asdfasdfasdfA1$')).toBe(true)
  })
  test('at least one letter', () => {
    expect(isStrongPassword('1111111111$')).toBe(false)
    expect(isStrongPassword('1111111111a$')).toBe(true)
  })
  test('at least one symbol', () => {
    expect(isStrongPassword('1111111111a')).toBe(false)
    expect(isStrongPassword('1111111111a$')).toBe(true)
  })
  test('at least ten chars', () => {
    expect(isStrongPassword('1234567e(')).toBe(false)
    expect(isStrongPassword('1234567e(t')).toBe(true)
  })
})