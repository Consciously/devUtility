const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const { setupSysinfoVariant } = require('./lib/commands');

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

	const {
		answer,
		data: { infoStandard, infoExtended }
	} = await setupSysinfoVariant();

	if (answer.sysvariant === 'standard') {
		console.log(`You clicked ${answer.sysvariant}`);
	} else {
		console.log(`You clicked ${answer.sysvariant}`);
	}

	// console.log(answer);
})();
