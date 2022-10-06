const phin = require('phin');
/**
 * Gets place info
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceInfo(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body);
	});

	return place;
}
module.exports = {
	GetPlaceInfo,
};
