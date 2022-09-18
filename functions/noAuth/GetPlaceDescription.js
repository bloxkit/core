'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns description
 * @deprecated
 */

/** Gets place's description  */
export async function GetPlaceDescription(id) {
	let description = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).Description;
	});

	return description;
}
