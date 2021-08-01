const inquirer = require('inquirer');

const askSysInfoVariant = async () => {
	const questions = [
		{
			type: 'list',
			name: 'sysvariant',
			message:
				'Choose either a standard or an extended view of your sysinfo. Or customize your choices.',
			choices: ['standard', 'extended'],
			default: 'standard'
		}
	];

	const answer = await inquirer.prompt(questions);
	return answer;
};

module.exports = {
	askSysInfoVariant
};
