const phin = require('phin');

/**
 * Gets username from ID
 * @param {Number} id
 * @returns username
 * @async
 * @deprecated
 */

async function GetUsername(id) {
	let username = await phin(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.body).Username;
	});

	return username;
}

module.exports = {
	GetUsername,
};
