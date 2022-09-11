'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @returns username
 */

/** Gets username from ID */
export async function GetUsername(id) {
	let username = await superagent.get(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.text).Username;
	});

	return username;
}
