import GetUserBadges from '../functions/noAuth/GetUserBadges.js';
await GetUserBadges({ username: 'r6nted' }).then((res) => console.log(res));
