const r = require('../common/index.cjs');
(async () => {
	await r.GetStatus({ username: 'r6nted' }).then((a) => console.log(a));
})();
