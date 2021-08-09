const { askSysInfoVariant } = require('../lib/inquirerSysinfo');
const { askCreateProjectOrPrintSysinfo } = require('../lib/inquirerProject');
// const program = require('commander');
const { systemInfoViews } = require('../views/sysInfoViews');

// program
// 	.version('1.0.0')
// 	.alias('v')
// 	.description('A very usefull utility tool for developers');

const setupSysInfo = async () => {
	const answerSysinfo = await askSysInfoVariant();
	const data = await systemInfoViews();

	const dataStandard = data.printDataStandard();
	const dataExtended = data.printDataExtended();

	return {
		answerSysinfo,
		dataStandard,
		dataExtended
	};
};

const setupCreateProject = async () => {
	const answerCreateProjectdOrPrintSysinfo =
		await askCreateProjectOrPrintSysinfo();

	return {
		answerCreateProjectdOrPrintSysinfo
	};
};

// setupSysInfo();

module.exports = {
	setupSysInfo,
	setupCreateProject
};
