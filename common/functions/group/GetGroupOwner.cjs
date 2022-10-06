const phin = require('phin');

/**
 * Gets group's owner
 * @param {Number} id
 * @returns {JSON} info
 */

async function GetGroupOwner(id) {
	let info = await phin(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.body).owner;
	});

	return info;
}
module.exports = {
	GetGroupOwner,
};
