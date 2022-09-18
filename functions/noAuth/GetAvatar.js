'use strict';

import phin from 'phin';

/**
 * Gets user's avatar from their ID
 *
 * @param {Number} id
 * @async
 * @example await GetAvatar(2435143522)
 */

export async function GetAvatar(id) {
	let res = await phin(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`);

	return JSON.parse(res.body).data[0].imageUrl;
}
