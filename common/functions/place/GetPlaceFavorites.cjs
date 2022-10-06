const phin = require('phin');

/**
 * Gets place's favorites
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceFavorites(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).FavoritedCount;
	});

	return place;
}

module.exports = {
	GetPlaceFavorites,
};
