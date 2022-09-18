'use strict';

import phin from 'phin';

/**
 * Gets user's ID from username
 * @param {String} username
 * @async
 * @deprecated
 */

/** Gets user's ID from username */
export async function GetID(username) {
	let ID = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
		return JSON.parse(res.body).Id;
	});

	return ID;
}
