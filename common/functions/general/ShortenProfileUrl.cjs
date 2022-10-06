/**
 * Shortens users profile url
 * @param {Number} id
 * @async
 */

async function ShortenProfileUrl(id) {
	return `https://rblx.name/${id}`;
}

module.exports = {
	ShortenProfileUrl,
};
