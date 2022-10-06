/**
 * Shortens game's url
 * @param {Number} id
 * @async
 */

async function ShortenGameUrl(id) {
	return `https://rblx.games/${id}`;
}

module.exports = {
	ShortenGameUrl,
};
