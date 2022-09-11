'use strict';

import superagent from 'superagent';

/**
 *
 * @param id
 * @type number
 * @returns place
 */

/** Gets place info  */
export async function GetPlaceInfo(id) {
	let place = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text);
	});

	return place;
}
