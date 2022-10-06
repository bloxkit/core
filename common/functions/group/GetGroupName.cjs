const phin = require('phin');

/**
 * Gets group's name
 * @param {Number} id
 * @returns {JSON} info
 */

async function GetGroupName(id) {
	let info = await phin(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.body).name;
	});

	return info;
}

module.exports = {
	GetGroupName,
};
