import { getPasswordMessage } from '../getPasswordMessage'
import { 
  tooShortMessage,
  charMessage,
  digitMessage,
  noSymbolMessage,
  wrongSymbolMessage
} from '../tests'

describe('getPasswordMessage util', () => {
  test('getMessage util', () => {
    expect(getPasswordMessage('1dfA$')).toBe(tooShortMessage)
    expect(getPasswordMessage('1111111111$')).toBe(charMessage)
    expect(getPasswordMessage('asdfasdfasdfA$')).toBe(digitMessage)
    expect(getPasswordMessage('1111111111a')).toBe(noSymbolMessage)
    expect(getPasswordMessage('1111111111a$+')).toBe(wrongSymbolMessage)
    expect(getPasswordMessage('123456789{a')).toBe('')
  })  
})