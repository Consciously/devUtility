const { askSysInfoVariant } = require('../lib/inquirer');
const program = require('commander');
const { systemInfoViews } = require('../views/sysInfoViews');

program
	.version('1.0.0')
	.alias('v')
	.description('A very usefull utility tool for developers');

const setupSysInfo = async () => {
	const answer = await askSysInfoVariant();
	const data = await systemInfoViews();

	const dataStandard = data.printDataStandard();
	const dataExtended = data.printDataExtended();

	return { answer, dataStandard, dataExtended };
};

// setupSysInfo();

module.exports = {
	setupSysInfo
};
