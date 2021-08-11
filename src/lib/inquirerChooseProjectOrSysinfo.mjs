import inquirer from 'inquirer';

const askChooseProjectOrPrintSysinfo = async () => {
	const questionChooseProjectOrSysinfo = [
		{
			type: 'list',
			name: 'projectOrSysinfo',
			message:
				'Do you want to create a new project or just print your sysinfo on the screen?',
			choices: ['Create Project', 'System Information']
		}
	];

	const answerChooseProjectOrSysinfo = await inquirer.prompt(
		questionChooseProjectOrSysinfo
	);
	return answerChooseProjectOrSysinfo;
};

export { askChooseProjectOrPrintSysinfo };
