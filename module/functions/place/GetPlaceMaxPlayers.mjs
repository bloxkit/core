'use strict';

import phin from 'phin';

/**
 * Gets place's max players
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

export async function GetPlaceMaxPlayers(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).MaxPlayers;
	});

	return place;
}
