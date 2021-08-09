const { askSysInfoVariant } = require('./inquirer');
const program = require('commander');
const { systemInfoViews } = require('./views');

program
	.version('1.0.0')
	.alias('v')
	.description('A very usefull utility tool for developers');

const setupSysInfo = async () => {
	const answer = await askSysInfoVariant();
	const data = await systemInfoViews();

	return { answer, data };
};

setupSysInfo();

module.exports = {
	setupSysInfo
};
