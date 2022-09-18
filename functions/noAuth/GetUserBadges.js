'use strict';

import phin from 'phin';

/**
 * Gets user's badges
 *
 * @param {Number} id Optional
 * @param {String} username Optional
 * @async This function is asynchronous
 * @example console.log(await GetUserBadges(287509940))
 */

export async function GetUserBadges({ id, username }) {
	if (!id && !username) throw new Error('You must provide either a username or id');
	if (!id) {
		let id = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
			return JSON.parse(res.body).Id;
		});

		let res = await phin(`https://badges.roblox.com/v1/users/${id}/badges?limit=10&sortOrder=Asc`).then((res) => {
			return JSON.parse(res.body);
		});

		return res;
	} else if (id) {
		let res = await phin(`https://badges.roblox.com/v1/users/${id}/badges?limit=10&sortOrder=Asc`).then((res) => {
			return JSON.parse(res.body);
		});

		return res;
	}
}
