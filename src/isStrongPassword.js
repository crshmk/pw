/**
 * tests all criteria; see messages
 */
const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{10,}$/

/**
 * @param {String} x 
 * @returns Boolean
 */
export const isStrongPassword = x => 
  strongPasswordRegex.test(x)
