'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id Optional
 * @param {String} username Optional
 * @async This function is asynchronous
 * @returns data
 */

/** Gets user's past usernames from ID  */
export async function GetUsernameHistory({ id, username }) {
	if (!id && !username) throw new Error('You must provide either a username or id');
	if (!id) {
		let id = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
			return JSON.parse(res.body).Id;
		});

		let usernames = await phin(`users.roblox.com/v1/users/${id}/username-history`).then((res) => {
			return JSON.parse(res.body).data;
		});

		return usernames;
	} else if (id) {
		let usernames = await phin(`users.roblox.com/v1/users/${id}/username-history`).then((res) => {
			return JSON.parse(res.body).data;
		});

		return usernames;
	}
}
