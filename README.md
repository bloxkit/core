# Bloxkit

Bloxkit is a ROBLOX api wrapper. As of now this package does not have authentication, so you cannot use this to block people, view your friend requests, and other endpoints. This package is still in it's beta stage so please bare with me. Contributions are welcomed.

### Installation

Using Npm:

```sh
npm i -D bloxkit
```

From Source:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" width="15" align="center"> [**vscode.dev**](https://vscode.dev/github/r6nted/bloxkit)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Repl.it_logo.svg/768px-Repl.it_logo.svg.png" width="15" align="center"> [**repl.it**](https://replit.com/github/r6nted/bloxkit)

<img src="https://c.staticblitz.com/assets/favicon-7453cf0c12d349fb64b7aa2b69cc69c026f083a27f139f0839b1f4948bed6811.png" width="15" align="center"> [**stackblitz**](https://stackblitz.com/github/r6nted/bloxkit)

**command line:** `git clone https://github.com/r6nted/bloxkit.git`

### Example Usage

```js
import { GetStatus } from 'bloxkit';

// returns online or offline
GetStatus(287509940).then((status) => console.log(status));
```

### Docs

Check out the docs [here](./docs/)

#### Docs Guide

- <u><b>?</b></u>: optional parameter
- <u><b>!</b></u>: reccomended parameter

### Roblox Api endpoints

> Credits to [matthewdean](https://github.com/matthewdean)

| Site | Description |
| --: | :-- |
| [abtesting.roblox.com](https://abtesting.roblox.com/docs) | Endpoints for the A/B Testing framework |
| [accountinformation.roblox.com](https://accountinformation.roblox.com/docs) | All endpoints for acessing/modifying account information |
| [accountsettings.roblox.com](https://accountsettings.roblox.com/docs) | All endpoints for account/user settings |
| [adconfiguration.roblox.com](https://adconfiguration.roblox.com/docs) | Roblox Ad Configuration related endpoints |
| [ads.roblox.com](https://ads.roblox.com/docs) | Ads configuration endpoints |
| [api.roblox.com](https://api.roblox.com/docs) | Roblox Legacy Api Endpoints |
| [assetdelivery.roblox.com](https://assetdelivery.roblox.com/docs) | Serves asset content |
| [auth.roblox.com](https://auth.roblox.com/docs) | All endpoints that tamper with authentication sessions |
| [avatar.roblox.com](https://avatar.roblox.com/docs) | Endpoints relating to the customization of player avatars |
| [badges.roblox.com](https://badges.roblox.com/docs) | Endpoints for badges and badge awards management |
| [billing.roblox.com](https://billing.roblox.com/docs) | Real money transactions and interaction |
| [catalog.roblox.com](https://catalog.roblox.com/docs) | Catalog items browsing and searching. Content and user based catalog items recommendations |
| [cdnproviders.roblox.com](https://cdnproviders.roblox.com/docs) | Content delivery network providers API |
| [chat.roblox.com](https://chat.roblox.com/docs) | All chat and party related endpoints |
| [clientsettings.roblox.com](https://clientsettings.roblox.com/docs) | Used by various Roblox clients to retrieve configuration information |
| [clientsettingscdn.roblox.com](https://clientsettingscdn.roblox.com/docs) | Used by various Roblox clients to retrieve configuration information |
| [client-telemetry.roblox.com](https://client-telemetry.roblox.com) | Handles client telemtry |
| [contentstore.roblox.com](https://contentstore.roblox.com/docs) | ApiSite to front the TemporaryStore for files before uploading to S3 |
| [contacts.roblox.com](https://contacts.roblox.com/docs) | Contacts and userTag management |
| [develop.roblox.com](https://develop.roblox.com/docs) | Game development configuration endpoints |
| [discussions.roblox.com](https://discussions.roblox.com/docs) | Discussions API (temporarily offline) |
| [economy.roblox.com](https://economy.roblox.com/docs) | Endpoints related to transactions and currency |
| [economycreatorstats.roblox.com](https://economycreatorstats.roblox.com/docs) | Roblox.EconomyCreatorStats.Api endpoints. |
| [engagementpayouts.roblox.com](https://engagementpayouts.roblox.com/docs) | For engagement-based payout information |
| [ephemeralcounters.api.roblox.com](https://ephemeralcounters.api.roblox.com) | Handles ephemeral counters |
| [followings.roblox.com](https://followings.roblox.com/docs) | Establishes follow relationship between subscriber entities (users, groups, etc) and source entities (games, groups, assets, etc.) |
| [friends.roblox.com](https://friends.roblox.com/docs) | Friends, followers, and contacts management |
| [gameinternationalization.roblox.com](https://gameinternationalization.roblox.com/docs) | Manages internationalization of games such as translating in game content. |
| [gamejoin.roblox.com](https://gamejoin.roblox.com/docs) | All endpoints around launching a game |
| [gamepersistence.roblox.com](https://gamepersistence.roblox.com/docs) | Endpoints for the in-game datastore system for storing data for games |
| [games.roblox.com](https://games.roblox.com/docs) | All endpoints for game discovery, and details |
| [groups.roblox.com](https://groups.roblox.com/docs) | Groups management |
| [groupsmoderation.roblox.com](https://groupsmoderation.roblox.com/docs) | Group Moderation |
| [inventory.roblox.com](https://inventory.roblox.com/docs) | All endpoints for viewing (but not granting) ownership of items |
| [itemconfiguration.roblox.com](https://itemconfiguration.roblox.com/docs) | Configure Items (bundles amd avatar assets) |
| [lms.roblox.com](https://lms.roblox.com/) | Status of the Latency Management Service |
| [locale.roblox.com](https://locale.roblox.com/docs) | User locale management |
| [localizationtables.roblox.com](https://localizationtables.roblox.com/docs) | Handles managing of localization tables |
| [metrics.roblox.com](https://metrics.roblox.com/docs) | Record metrics across Roblox |
| [midas.roblox.com](https://midas.roblox.com/docs) | Handle requests around making purchases using Midas |
| [notifications.roblox.com](https://notifications.roblox.com/docs) | All notification stream endpoints |
| [points.roblox.com](https://points.roblox.com/docs) | The web Api for the in-game PointsService |
| [premiumfeatures.roblox.com](https://premiumfeatures.roblox.com/docs) | This API is for premium features and anything pertaining to account add ons |
| [presence.roblox.com](https://presence.roblox.com/docs) | All endpoints for managing presence |
| [privatemessages.roblox.com](https://privatemessages.roblox.com/docs) | All messages page endpoints |
| [publish.roblox.com](https://publish.roblox.com/docs) | All endpoints handling file uploads |
| [realtime.roblox.com](https://realtime.roblox.com/) | Purpose of API here |
| [share.roblox.com](https://share.roblox.com/docs) | Purpose of Api here |
| [search.roblox.com](https://developer.roblox.com/en-us/articles/Catalog-API) | Legacy item search endpoints. |
| [textfilter.roblox.com](https://textfilter.roblox.com/docs) | High volume text filtering |
| [thumbnails.roblox.com](https://thumbnails.roblox.com/docs) | Endpoints for requesting thumbnails |
| [thumbnailsresizer.roblox.com](https://thumbnailsresizer.roblox.com/docs) | Validate and resize thumbnails to requested dimensions |
| [trades.roblox.com](https://trades.roblox.com/docs) | Endpoints for trading collectible items |
| [translationroles.roblox.com](https://translationroles.roblox.com/docs) | Manages translation roles of developers in game localization |
| [translations.roblox.com](https://translations.roblox.com/docs) | Endpoints for requesting translations |
| [twostepverification.roblox.com](https://twostepverification.roblox.com/docs) | Platform interface for the two step verification system |
| [users.roblox.com](https://users.roblox.com/docs) | APIs for direct Roblox user information. |
| [versioncompatability.api.roblox.com](https://versioncompatability.api.roblox.com) | Handles version compatability |
| [voice.roblox.com](https://voice.roblox.com/docs) | APIs for Voice calls |
