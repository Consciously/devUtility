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
	const {
		answer,
		dataStandard: {
			tableStd,
			tableCPUStd,
			tableSystemStd,
			tableMemoryStd,
			tableOSStd,
			tableDiskStd,
			tableNetworkStd
		},
		dataExtended: {
			tableExt,
			tableCpuExt,
			tableSystemExt,
			tableBiosExt,
			tableMotherboardExt,
			tableMemoryExt,
			tableMemoryLayoutExt,
			tableOSExt,
			tableVersionsExt,
			tableDiskExt,
			tableFSExt,
			tableNetworkExt
		}
	} = await setupSysInfo();

	if (answer.sysvariant === 'standard') {
		console.log(tableStd.toString());
		console.log(tableCPUStd.toString());
		console.log(tableSystemStd.toString());
		console.log(tableMemoryStd.toString());
		console.log(tableOSStd.toString());
		console.log(tableDiskStd.toString());
		console.log(tableNetworkStd.toString());
	} else {
		console.log(tableExt.toString());
		console.log(tableCpuExt.toString());
		console.log(tableSystemExt.toString());
		console.log(tableBiosExt.toString());
		console.log(tableMotherboardExt.toString());
		console.log(tableMemoryExt.toString());
		console.log(tableMemoryLayoutExt.toString());
		console.log(tableOSExt.toString());
		console.log(tableVersionsExt.toString());
		console.log(tableDiskExt.toString());
		console.log(tableFSExt.toString());
		console.log(tableNetworkExt.toString());
	}
})();
