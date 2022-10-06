const phin = require('phin');

/**
 * Gets place's report url
 * @param {Number} id The place's id
 * @returns {JSON} place
 */

async function GetPlaceReportUrl(id) {
	let place = await phin(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.body).ReportAbuseAbsoluteUrl;
	});

	return place;
}

module.exports = {
	GetPlaceReportUrl,
};
