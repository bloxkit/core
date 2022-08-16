# [GetPlaceInfo](#example-usage)

### Params:

- <u>id</u>: `number`

### Example Usage

```js
// import the function from the package
import { GetPlaceInfo } from 'bloxkit'

const place = GetPlaceInfo('1234567').then(place => return place)

// log one property of the place
console.log(place.Name)
// log entire json
console.log(place)
```
