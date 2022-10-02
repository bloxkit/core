/**
 * Shortens game's url
 * @param {Number} id
 * @async
 */

export async function ShortenGameUrl(id) {
	return `https://rblx.games/${id}`;
}
