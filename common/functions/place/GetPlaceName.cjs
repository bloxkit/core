const phin = require('phin');

/**
 * Gets place's name
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceName(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).Name;
	});

	return place;
}

module.exports = {
	GetPlaceName,
};
