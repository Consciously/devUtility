#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const { setupSysInfo } = require('./lib/commands');

(async () => {
	clear();

	console.log(
		chalk.whiteBright.bold.bgBlackBright(
			figlet.textSync('DevUtility', {
				font: 'Small Slant',
				horizontalLayout: 'fitted',
				width: 150
			})
		)
	);

	console.log(
		chalk.whiteBright.bold('A very usefull utility tool for developers')
	);
	const { answer, data } = await setupSysInfo();

	if (answer.sysvariant === 'standard') {
		console.log(data.infoStandard);
	} else {
		console.log(data.infoExtended);
	}
})();
