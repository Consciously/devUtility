import inquirer from 'inquirer';

const askGetGithhubToken = async () => {
	const validateInputGithubToken = async input => {
		if (input === 0 || input.length < 40) {
			return 'Please insert a valid Token!';
		}
		return true;
	};

	const questionGithubToken = [
		{
			type: 'password',
			name: 'githubToken',
			message: 'Copy and paste your Github-Token from somewhere in here',
			validate: validateInputGithubToken
		}
	];

	const answerGithubToken = await inquirer.prompt(questionGithubToken);
	return answerGithubToken;
};

export { askGetGithhubToken };
