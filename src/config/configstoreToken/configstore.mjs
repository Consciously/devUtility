import Configstore from 'configstore';
// import { readFileSync } from 'fs';
import path from 'path';
import { URL } from 'url';

export const useConfigstore = answerGithubToken => {
	// const __dirname = dirname(fileURLToPath(import.meta.url));
	// const pkg = JSON.parse(readFileSync(__dirname, 'package.json', 'utf-8'));
	// const pkg = new URL('./package.json', import.meta.url).pathname;

	const pkg = (() => {
		let x = path.dirname(decodeURI(new URL(import.meta.url).pathname));
		return path.resolve(process.platform == 'win32' ? x.substr(1) : x);
	})();

	const config = new Configstore(pkg);

	let githubToken = '';
	if (config.has('githubToken')) {
		githubToken = config.get('githubToken');
		return githubToken;
	} else {
		config.set('githubToken', answerGithubToken);
	}
};
