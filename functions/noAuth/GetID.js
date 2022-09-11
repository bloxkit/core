'use strict';

import superagent from 'superagent';

/**
 *
 * @param username
 * @type string
 * @returns id
 */

/** Gets user's ID from username */
export async function GetID(username) {
	let ID = await superagent.get(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
		return JSON.parse(res.text).Id;
	});

	return ID;
}
