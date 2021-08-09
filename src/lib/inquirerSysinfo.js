const inquirer = require('inquirer');

const askSysInfoVariant = async () => {
	const questionSysinfo = [
		{
			type: 'list',
			name: 'sysvariant',
			message: 'Choose either a standard or an extended view of your sysinfo.',
			choices: ['Standard', 'Extended'],
			default: 'Standard'
		}
	];

	const answerSysinfo = await inquirer.prompt(questionSysinfo);
	return answerSysinfo;
};

module.exports = {
	askSysInfoVariant
};
