'use strict';

import superagent from 'superagent';

/**
 *
 * @param username
 * @type string
 * @returns id
 */

/** Gets user's ID from username */
export async function GetID(username) {
	let ID = await superagent.get(`https://api.roblox.com/users/get-by-username?username=${username}`).then((res) => {
		return JSON.parse(res.text).Id;
	});

	return ID;
}

/**
 *
 * @param id
 * @type number
 * @returns online || offline
 */

/** Gets user's current status, returns online or offline. */
export async function GetStatus(id) {
	let statusfunc = await superagent.get(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.text).IsOnline;
	});

	if (statusfunc === true) return 'online';
	if (statusfunc === false) return 'offline';
}

/**
 *
 * @param id
 * @returns username
 */

/** Gets username from ID */
export async function GetUsername(id) {
	let username = await superagent.get(`https://api.roblox.com/users/${id}`).then((res) => {
		return JSON.parse(res.text).Username;
	});

	return username;
}

/**
 *
 * @param id
 * @type number
 * @returns imageUrl
 */

/** Gets user's avatar from their ID */
export async function GetAvatar(id) {
	let imageUrl = await superagent
		.get(`https://thumbnails.roblox.com/v1/users/avatar-headshot?size=420x420&format=png&userIds=${id}`)
		.then((res) => {
			return JSON.parse(res.text).imageUrl;
		});

	return imageUrl;
}

/**
 *
 * @param id
 * @type number
 * @returns data
 */

/** Gets user's past usernames from ID  */
export async function GetUsernameHistory(id) {
	let usernames = await superagent.get(`users.roblox.com/v1/users/${id}/username-history`).then((res) => {
		return JSON.parse(res.text).data;
	});

	return usernames;
}

/**
 *
 * @param id
 * @type number
 * @returns place
 */

/** Gets place info  */
export async function GetPlaceInfo(id) {
	let place = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text);
	});

	return place;
}

/**
 *
 * @param id
 * @type number
 * @returns name
 */

/** Gets place's name  */
export async function GetPlaceName(id) {
	let name = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text).Name;
	});

	return name;
}

/**
 *
 * @param id
 * @type number
 * @returns description
 */

/** Gets place's description  */
export async function GetPlaceDescription(id) {
	let description = await superagent.get(`https://www.roblox.com/places/api-get-details?assetId=${id}`).then((res) => {
		return JSON.parse(res.text).Description;
	});

	return description;
}

/**
 *
 * @param id
 * @type number
 * @returns {JSON} info
 */

/** Gets group's info  */
export async function GetGroupInfo(id) {
	let info = await superagent.get(`https://groups.roblox.com/v1/groups/${id}`).then((res) => {
		return JSON.parse(res.text);
	});

	return info;
}

/**
 *
 * @param {String} keyword
 * @returns {JSON} results
 */

/** Gets related accounts by keyword  */
export async function UserSearch(keyword) {
	let res = await superagent.get(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`);

	return await superagent
		.get(`https://users.roblox.com/v1/users/search?keyword=${keyword}&limit=10`)
		.then((res) => JSON.parse(res.text).data);
}
