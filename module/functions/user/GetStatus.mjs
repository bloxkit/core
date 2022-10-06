'use strict';

import phin from 'phin';

/**
 * Gets user's current status, returns online or offline
 * @param {Number} id Optional
 * @param {String} username Optional
 * @async This function is asynchronous
 */

export async function GetStatus({ id, username }) {
	let statusfunc = await phin(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.body).IsOnline;
	});

	if (statusfunc === true) return 'online';
	if (statusfunc === false) return 'offline';
}
