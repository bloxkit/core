'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns {JSON} info
 */

/** Gets group's info  */
export async function GetGroupInfo(id) {
	let info = await phin(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.body);
	});

	return info;
}
