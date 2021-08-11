import Configstore from 'configstore';
import { readFileSync } from 'fs';

export const useConfigstore = answerGithubToken => {
	const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
	const config = new Configstore(pkg);

	let githubToken = '';
	if (config.has('githubToken')) {
		githubToken = config.get('githubToken');
		return githubToken;
	} else {
		config.set('githubToken', answerGithubToken);
	}
};
