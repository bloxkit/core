'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns data
 */

/** Gets user's past usernames from ID  */
export async function GetUsernameHistory(id) {
	let usernames = await superagent.get(`users.roblox.com/v1/users/${id}/username-history`).then((res) => {
		return JSON.parse(res.text).data;
	});

	return usernames;
}
