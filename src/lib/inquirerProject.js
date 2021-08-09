const inquirer = require('inquirer');

const askCreateProjectOrPrintSysinfo = async () => {
	const questionProject = [
		{
			type: 'list',
			name: 'projectOrSysinfo',
			message:
				'Do you want to create a new project or just print your sysinfo on the screen?',
			choices: ['Create Project', 'System Information']
		}
	];

	const answerProject = await inquirer.prompt(questionProject);
	return answerProject;
};

module.exports = {
	askCreateProjectOrPrintSysinfo
};
