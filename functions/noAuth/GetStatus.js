'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns online || offline
 */

/** Gets user's current status, returns online or offline. */
export async function GetStatus(id) {
	let statusfunc = await phin(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.body).IsOnline;
	});

	if (statusfunc === true) return 'online';
	if (statusfunc === false) return 'offline';
}
