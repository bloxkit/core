'use strict';

import superagent from 'superagent';
/**
 *
 * @param {String} keyword
 * @returns {JSON} results
 */

/** Gets related accounts by keyword  */
export async function UserSearch(keyword) {
	let res = await superagent.get(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`);

	return await superagent
		.get(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`)
		.then((res) => JSON.parse(res.text).data);
}
