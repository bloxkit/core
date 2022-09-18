'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns data
 */

/** Gets user's past usernames from ID  */
export async function GetUsernameHistory(id) {
	let usernames = await phin(`users.roblox.com/v1/users/${id}/username-history`).then((res) => {
		return JSON.parse(res.body).data;
	});

	return usernames;
}
