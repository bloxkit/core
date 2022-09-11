'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns online || offline
 */

/** Gets user's current status, returns online or offline. */
export async function GetStatus(id) {
	let statusfunc = await superagent.get(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.text).IsOnline;
	});

	if (statusfunc === true) return 'online';
	if (statusfunc === false) return 'offline';
}
