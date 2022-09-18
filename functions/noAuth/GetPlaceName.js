'use strict';

import phin from 'phin';

/**
 *
 * @param {Number} id
 * @returns {String} name
 * @deprecated
 */

/** Gets place's name  */
export async function GetPlaceName(id) {
	let name = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).Name;
	});

	return name;
}
