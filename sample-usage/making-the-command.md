# Making the command

Inside of our `messageCreate` event listener, we're going to add this

```javascript
if (msg.content.includes('!game') === true) {
	const id = message.content.slice(1).trim().split(/ +/g);
	const info = Bloxkit.GetPlaceInfo(id);

	const place_embed = {
		title: info.Name,
		description: info.Description,
		url: info.Url,
		color: 3092790,
		author: {
			name: info.Builder,
		},
	};

	msg.channel.createMessage({
		embed: place_embed,
	});
}
```
