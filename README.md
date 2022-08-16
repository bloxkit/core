# bloxkit

Bloxkit is a ROBLOX api wrapper. As of now this package does not have authentication, so you cannot use this to block people, view your friend requests, and other endpoints. This package is still in it's beta stage so please bare with me. Contributions are welcomed.

### Installation

```sh
npm i -D bloxkit
```

### Example Usage

```js
import { GetStatus } from 'bloxkit';

// returns online or offline
GetStatus(287509940).then((status) => console.log(status));
```

### Docs

Check out the docs [here](./docs/)

#### Docs Guide

- <u><b>?</b></u>: optional parameter
- <u><b>!</b></u>: reccomended parameter
