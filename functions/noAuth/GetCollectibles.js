'use strict';

import phin from 'phin';

/**
 * Returns the user's selected collectibles
 * @param {number} id
 * @returns {json} collectibles
 */

export async function GetCollectibles(id) {
	let collectibles = phin(`https://www.roblox.com/users/profile/robloxcollections-json?userId=${id}`).then((res) => {
		return JSON.parse(res.body);
	});

	return collectibles;
}
