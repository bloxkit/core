'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns name
 */

/** Gets place's name  */
export async function GetPlaceName(id) {
	let name = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text).Name;
	});

	return name;
}
