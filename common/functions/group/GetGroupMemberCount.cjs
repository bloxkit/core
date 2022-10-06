const phin = require('phin');

/**
 * Gets group's member count
 * @param {Number} id
 * @returns {JSON} info
 */

async function GetGroupMemberCount(id) {
	let info = await phin(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.body).memberCount;
	});

	return info;
}

module.exports = {
	GetGroupMemberCount,
};
