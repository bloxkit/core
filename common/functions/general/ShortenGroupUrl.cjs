/**
 * Shortens groups url
 * @param {Number} id
 * @async
 */

async function ShortenGroupUrl(id) {
	return `https://rblx.social/${id}`;
}

module.exports = {
	ShortenGroupUrl,
};
