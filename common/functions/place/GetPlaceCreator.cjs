const phin = require('phin');

/**
 * Gets place's creator
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceCreator(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return {
			username: JSON.parse(res.body).Builder,
			id: JSON.parse(res.body).BuilderId,
			url: JSON.parse(res.body).BuilderAbsoluteUrl,
		};
	});

	return place;
}

module.exports = {
	GetPlaceCreator,
};
