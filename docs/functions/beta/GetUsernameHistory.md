# [GetUsernameHistory](#example-usage)

### Params:

- <u>id</u>: `number`

### Example Usage

```js
// import the function from the package
import { GetUsernameHistory } from 'bloxkit'

const usernames = GetUsernameHistory('1234567').then(usernames => return usernames)

// log all usernames
console.log(usernames)

// or log individual username
console.log(usernames[0])
```