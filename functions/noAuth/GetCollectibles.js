'use strict';

import superagent from 'superagent';

/**
 * Returns up to 10 of the user's selected collectibles
 * @param {number} id
 * @returns {json} collectibles
 */

export async function GetCollectibles(id) {
	let collectibles = superagent
		.get(`https://www.roblox.com/users/profile/robloxcollections-json?userId=${id}`)
		.then((res) => {
			return JSON.parse(res.text);
		});

	return collectibles;
}
