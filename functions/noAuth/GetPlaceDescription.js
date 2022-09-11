'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns description
 */

/** Gets place's description  */
export async function GetPlaceDescription(id) {
	let description = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text).Description;
	});

	return description;
}
