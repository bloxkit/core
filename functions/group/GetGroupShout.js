'use strict';

import phin from 'phin';

/**
 * Gets group's shout
 * @param {Number} id
 * @returns {JSON} info
 */

export async function GetGroupShout(id) {
	let info = await phin(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return {
			text: JSON.parse(res.body).shout.body,
			poster: {
				userId: JSON.parse(res.body).shout.poster.userId,
				username: JSON.parse(res.body).shout.poster.username,
				displayName: JSON.parse(res.body).shout.poster.displayName,
			},
		};
	});

	return info;
}
