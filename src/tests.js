import { 
  complement, 
  gt,
  length,
  pipe,
  test as _test
} from 'ramda'

/**
 * regex => string => bool 
 */
const test = complement(_test)

/**
 * string => bool 
 */
export const isShort = pipe(
  length, 
  gt(10)
)
export const tooShortMessage = 
  'Password must be at least 10 characters'

/**
 * string => bool
 */
export const hasChar = test(/(?=.*[A-Za-z])/)
export const charMessage = 
  'Password must have at least one character'

/**
 * string => bool
 */
export const hasDigit = test(/(?=.*\d)/)
export const digitMessage = 
  'Password must have at least one number'

/**
 * string => bool
 */
export const hasSymbol = test(/(?=.*[!@#$%^&*(),.?":{}|<>])/)
export const noSymbolMessage = 
  'Password must have at least one of the following symbols: !@#$%^&*()<>?{}'

/**
 * string => bool
 */
export const hasCorrectSymbols = test(/^[A-Za-z\d!@#$%^&*(),.?":{}|<>]{10,}$/)
export const wrongSymbolMessage = 
  'Password symbols may only be one of these: !@#$%^&*()<>?{}' 
