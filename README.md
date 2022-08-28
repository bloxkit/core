# Bloxkit

Bloxkit is a ROBLOX api wrapper. As of now this package does not have authentication, so you cannot use this to block people, view your friend requests, and other endpoints. This package is still in it's beta stage so please bare with me. Contributions are welcomed.

### Installation

Using Npm:

```sh
npm i -D bloxkit
```

From Source:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" width="15" align="center"> [**vscode.dev**](https://vscode.dev/github/r6nted/bloxkit)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/768px-Repl.it_logo.svg.png" width="15" align="center"> [**repl.it**](https://replit.com/github/r6nted/bloxkit)

<img src="https://c.staticblitz.com/assets/favicon-7453cf0c12d349fb64b7aa2b69cc69c026f083a27f139f0839b1f4948bed6811.png" width="15" align="center"> [**stackblitz**](https://stackblitz.com/github/r6nted/bloxkit)

**command line:** `git clone https://github.com/r6nted/bloxkit.git`

### Example Usage

> When using any from the package you must put it inside an async anonymous function

```js
import { UserSearch } from '../index.js';

(async () => {
	console.log(await UserSearch('r6nted'));
})();
```

### Docs

Check out the docs [here](./docs/)

#### Docs Guide

- <u><b>?</b></u>: optional parameter
- <u><b>!</b></u>: reccomended parameter
