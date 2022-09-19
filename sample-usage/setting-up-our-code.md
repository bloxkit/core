---
description: Step by step guide
---

# Setting up our code

Create file titled `index.js`, or `index.ts` if you're using typescript. Then, import the required packages.

```javascript
import * as Bloxkit from 'bloxkit';
import Eris from 'eris';
```

Now lets create our bot,

<pre class="language-javascript"><code class="lang-javascript"><strong>import { token } from './config.json';
</strong><strong>
</strong><strong>const client = new Eris(token, {
</strong>    intents: [
        "guildMessages"
    ]
});</code></pre>

Now, lets listen for events

```javascript
client.on("ready", () => console.log("Ready!"));
client.on("messageCreate", (msg) => {
    // we'll do this later
});
```
