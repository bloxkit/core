'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns imageUrl
 */

/** Gets user's avatar from their ID */
export async function GetAvatar(id) {
	let imageUrl = await superagent
		.get(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`)
		.then((res) => {
			return JSON.parse(res.text).imageUrl;
		});

	return imageUrl;
}
