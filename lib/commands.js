const inquirer = require('./inquirer');
const program = require('commander');
const sysinfo = require('./systeminformation');

program
	.version('1.0.0')
	.alias('v')
	.description('A very usefull utility tool for developers');

const setupSysinfoVariant = async () => {
	const answer = await inquirer.askSysInfoVariant();
	const data = await sysinfo.printSysInfo();

	return {
		answer,
		data
	};
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

module.exports = {
	setupSysinfoVariant
};
