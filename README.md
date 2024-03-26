requires [ramda](https://www.npmjs.com/package/ramda)
```bash
npm i github:crshmk/pw
```

```javascript
import { 
  isStrongPassword, 
  getPasswordMessage 
} from 'pw'

getPasswordMessage('a')
// 'Password must be at least 10 characters'

getPasswordMessage('aaaaaaaaaa')
// 'Password must have at least one number'

getPasswordMessage('0123456789')
// 'Password must have at least one character'

getPasswordMessage('0123456789a')
// 'Password must have at least one of the following symbols: !@#$%^&*()<>?{}'

getPasswordMessage('0123456789a?')
// ''

isStrongPassword('0123456789a?')
// true 

```