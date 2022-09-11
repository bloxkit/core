'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns {JSON} info
 */

/** Gets group's info  */
export async function GetGroupInfo(id) {
	let info = await superagent.get(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.text);
	});

	return info;
}
