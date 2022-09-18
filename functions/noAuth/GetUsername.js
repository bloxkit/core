'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns username
 * @async
 * @depreacted
 */

/** Gets username from ID */
export async function GetUsername(id) {
	let username = await phin(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.body).Username;
	});

	return username;
}
