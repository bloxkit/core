'use strict';

import phin from 'phin';

/**
 * @param {String} username
 * @returns id
 */

/** Gets user's ID from username */
export async function GetID(username) {
	let ID = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
		return JSON.parse(res.body).Id;
	});

	return ID;
}
