'use strict';

import phin from 'phin';

/**
 * Gets user's avatar
 *
 * @param {Number} id Optional
 * @param {String} username Optional
 * @async This function is asynchronous
 * @example await GetAvatar(2435143522)
 */

export async function GetAvatar({ id, username }) {
	if (!id && !username) throw new Error('You must provide either a username or id');
	if (!id) {
		let id = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
			return JSON.parse(res.body).Id;
		});

		let res = await phin(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`);

		return JSON.parse(res.body).data[0].imageUrl;
	} else {
		let res = await phin(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`);

		return JSON.parse(res.body).data[0].imageUrl;
	}
}
