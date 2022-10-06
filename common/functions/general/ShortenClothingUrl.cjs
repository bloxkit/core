/**
 * Shortens clothings's url
 * @param {Number} id
 * @async
 */

async function ShortenClothingUrl(id) {
	return `https://rblx.clothing/${id}`;
}

module.exports = {
	ShortenClothingUrl,
};
