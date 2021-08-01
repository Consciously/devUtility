const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

const commands = require('./lib/commands');

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

	const res = await commands.setupSysinfoVariant();

	const {
		answer: { sysvariant },
		data
	} = res;

	const info = `
		${chalk.blueBright.bold('CPU Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${data.cpu.manufacturer}
		${chalk.whiteBright.bold('Brand:')}                   ${data.cpu.brand}
		${chalk.whiteBright.bold('Speed:')}                   ${data.cpu.speed} GHz

		${chalk.blueBright.bold('System Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${
		data.system.manufacturer
	}
		${chalk.whiteBright.bold('Model:')}                   ${data.system.model}
		${chalk.whiteBright.bold('Version:')}                 ${data.system.version}`;

	if (sysvariant === 'standard') {
		console.log(info);
	} else if (sysvariant === 'extended') {
		console.log(`You have choose: ${sysvariant}`);
	} else {
		console.log(`You have choose: ${sysvariant}`);
	}
})();
