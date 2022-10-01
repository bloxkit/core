'use strict';

import phin from 'phin';

/**
 * Gets place's url
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

export async function GetPlaceUrl(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).Url;
	});

	return place;
}
