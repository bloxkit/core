/*
			  𝗕𝗹𝗼𝘅𝗸𝗶𝘁
	Easy to use ROBLOX API wrapper
*/

module.exports = {
	// General
	ShortenClothingUrl: require('./functions/general/ShortenClothingUrl.cjs'),
	ShortenGameUrl: require('./functions/general/ShortenGameUrl.cjs'),
	ShortenGroupUrl: require('./functions/general/ShortenGroupUrl.cjs'),
	ShortenProfileUrl: require('./functions/general/ShortenProfileUrl.cjs'),

	// User
	GetAvatar: require('./functions/user/GetAvatar.cjs'),
	GetCollectibles: require('./functions/user/GetCollectibles.cjs'),
	GetStatus: require('./functions/user/GetStatus.cjs'),
	GetUserBadges: require('./functions/user/GetUserBadges.cjs'),
	GetUserID: require('./functions/user/GetUserID.cjs'),
	GetUsername: require('./functions/user/GetUsername.cjs'),
	GetUsernameHistory: require('./functions/user/GetUsernameHistory.cjs'),
	UserSearch: require('./functions/user/UserSearch.cjs'),

	// Group
	GetGroupDescription: require('./functions/group/GetGroupDescription.cjs'),
	GetGroupInfo: require('./functions/group/GetGroupInfo.cjs'),
	GetGroupMemberCount: require('./functions/group/GetGroupMemberCount.cjs'),
	GetGroupName: require('./functions/group/GetGroupName.cjs'),
	GetGroupOwner: require('./functions/group/GetGroupOwner.cjs'),
	GetGroupShout: require('./functions/group/GetGroupShout.cjs'),

	// Place
	GetPlaceCreator: require('./functions/place/GetPlaceCreator.cjs'),
	GetPlaceDescription: require('./functions/place/GetPlaceDescription.cjs'),
	GetPlaceFavorites: require('./functions/place/GetPlaceFavorites.cjs'),
	GetPlaceInfo: require('./functions/place/GetPlaceInfo.cjs'),
	GetPlaceMaxPlayers: require('./functions/place/GetPlaceMaxPlayers.cjs'),
	GetPlaceName: require('./functions/place/GetPlaceName.cjs'),
	GetPlaceReportUrl: require('./functions/place/GetPlaceReportUrl.cjs'),
	GetPlaceUrl: require('./functions/place/GetPlaceUrl.cjs'),
};
