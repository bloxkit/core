const phin = require('phin');

/**
 * Gets user's ID from username
 * @param {String} username
 * @async
 * @deprecated
 */

async function GetUserID(username) {
	let ID = await phin(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
		return JSON.parse(res.body).Id;
	});

	return ID;
}

module.exports = {
	GetUserID,
};
