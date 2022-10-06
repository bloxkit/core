const phin = require('phin');

/**
 * Gets place's description
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceDescription(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).Description;
	});

	return place;
}

module.exports = {
	GetPlaceDescription,
};
