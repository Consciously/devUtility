const inquirer = require('./inquirer');
const program = require('commander');
const sysinfo = require('./systeminformation');
const chalk = require('chalk');

program
	.version('1.0.0')
	.alias('v')
	.description('A very usefull utility tool for developers');

const setupSysinfoVariant = async () => {
	const answer = await inquirer.askSysInfoVariant();
	const rawData = await sysinfo.printSysInfo();

	const data = Object.entries(rawData);

	data.map(item => item[0] && chalk.blueBright.bold(item[0]));

	console.log(data);
	// const info = `
	// 	${chalk.blueBright.bold('CPU Infos:')}

	// 	${chalk.whiteBright.bold('Manufacturer:')}            ${data.cpu.manufacturer}
	// 	${chalk.whiteBright.bold('Brand:')}                   ${data.cpu.brand}
	// 	${chalk.whiteBright.bold('Speed:')}                   ${data.cpu.speed} GHz

	// 	${chalk.blueBright.bold('System Infos:')}

	// 	${chalk.whiteBright.bold('Manufacturer:')}            ${
	// 	data.system.manufacturer
	// }
	// 	${chalk.whiteBright.bold('Model:')}                   ${data.system.model}
	// 	${chalk.whiteBright.bold('Version:')}                 ${data.system.version}`;

	// if (answer.sysvariant === 'standard') {
	// 	console.log(info);
	// } else if (answer.sysvariant === 'extended') {
	// 	console.log(`You have choose: ${answer.sysvariant}`);
	// } else {
	// 	console.log(`You have choose: ${answer.sysvariant}`);
	// }
};

// program.option('-s, --sysinfo', 'Print a brief summery of your system');

// program.parse(process.argv);

// const options = program.opts();

// if (options.sysinfo) {
// 	sysinfo.printSysInfo().then(data =>
// 		console.log(`CPU Infos:

// 	Manufacturer: 	${data.cpu.manufacturer}
// 	Brand: 		${data.cpu.brand}
// 	Speed: 		${data.cpu.speed} GHz

// 	System Infos:

// 	Manufacturer: 	${data.system.manufacturer}
// 	Model: 		${data.system.model}
// 	Version: 	${data.system.version}`)
// 	);
// }

setupSysinfoVariant();

module.exports = {
	setupSysinfoVariant
};
