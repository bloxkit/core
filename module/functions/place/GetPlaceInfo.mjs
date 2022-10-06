'use strict';

import phin from 'phin';

/**
 * Gets place info
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

export async function GetPlaceInfo(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body);
	});

	return place;
}
