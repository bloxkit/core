const phin = require('phin');

/**
 * Gets related accounts by keyword
 * @param {String} keyword
 * @returns {JSON} results
 */

async function UserSearch(keyword) {
	return await phin(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`).then(
		(res) => JSON.parse(res.body).data,
	);
}

module.exports = {
	UserSearch,
};
