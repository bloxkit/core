'use strict';

import phin from 'phin';

/**
 *
 * @param {String} keyword
 * @returns {JSON} results
 */

/** Gets related accounts by keyword  */
export async function UserSearch(keyword) {
	return await phin(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`).then(
		(res) => JSON.parse(res.body).data,
	);
}
