const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const commands = require('./lib/commands');

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
