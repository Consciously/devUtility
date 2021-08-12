import { askSysInfoVariant } from '../lib/inquirerSysinfo.mjs';
import { askChooseProjectOrPrintSysinfo } from '../lib/inquirerChooseProjectOrSysinfo.mjs';
import { askGetGithhubToken } from '../lib/inquirerAuthToken.mjs';
// const program = require('commander');
import { systemInfoViews } from '../views/sysInfoViews.mjs';
import { useConfigstore } from '../config/configstore.mjs';
import { handleGithubAuthentication } from '../config/github.mjs';

// program
// 	.version('1.0.0')
// 	.alias('v')
// 	.description('A very usefull utility tool for developers');

export const setupGithubRest = async githubToken => {
	const github = await handleGithubAuthentication(githubToken);

	return github;
};

export const setupConfigstore = githubToken => {
	useConfigstore(githubToken);

	return githubToken;
};

export const setupGithubAuthToken = async () => {
	const answerGithubToken = await askGetGithhubToken();
	setupConfigstore(answerGithubToken);

	return {
		answerGithubToken
	};
};

export const setupChooseProjectOrSysinfo = async () => {
	const answerChooseProjectdOrPrintSysinfo =
		await askChooseProjectOrPrintSysinfo();

	return {
		answerChooseProjectdOrPrintSysinfo
	};
};

export const setupSysInfo = async () => {
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

// setupSysInfo();
