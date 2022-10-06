const phin = require('phin');

/**
 * Returns the user's selected collectibles
 * @param {Number} id Optional
 * @param {String} username Optional
 * @returns {json} collectibles
 */

async function GetCollectibles({ id, username }) {
	if (!id && !username) throw new Error('You must provide either a username or id');
	if (!id) {
		let id = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
			return JSON.parse(res.body).Id;
		});

		return phin(`https://www.roblox.com/users/profile/robloxcollections-json?userId=${id}`).then((res) => {
			return JSON.parse(res.body);
		});
	} else {
		return phin(`https://www.roblox.com/users/profile/robloxcollections-json?userId=${id}`).then((res) => {
			return JSON.parse(res.body);
		});
	}
}

module.exports = {
	GetCollectibles,
};
