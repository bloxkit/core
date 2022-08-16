# bloxkit

Bloxkit is a ROBLOX api wrapper. As of now this package does not have authentication, so you cannot use this to block people, view your friend requests, and other endpoints. This package is still in it's beta stage so please bare with me. Contributions are welcomed.

### Installation

```sh
npm i -D bloxkit
```

### Functions
```js
// returns: 'r6nted'
GetUsername(287509940).then((username) => console.log(username));

// returns: 287509940
GetID('r6nted').then((id) => console.log(id));

// returns online or offline
GetStatus(287509940).then((status) => console.log(status));
```
