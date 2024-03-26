/**
 * takes a password 
 * returns an error message or an empty string
 */
import { 
  always, 
  cond, 
  T, 
  test as _test
} from 'ramda'

import {
  isShort,
  tooShortMessage,
  hasChar,
  charMessage,
  hasDigit,
  digitMessage,
  hasSymbol,
  noSymbolMessage,
  hasCorrectSymbols,
  wrongSymbolMessage
} from './tests'

const a = always 

/**
 * string => string 
 */
export const getPasswordMessage = cond([
  [isShort, a(tooShortMessage)],
  [hasChar, a(charMessage)],
  [hasDigit, a(digitMessage)],
  [hasSymbol, a(noSymbolMessage)],
  [hasCorrectSymbols, a(wrongSymbolMessage)],
  [T, a('')]
])
