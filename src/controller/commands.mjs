import { askSysInfoVariant } from '../lib/inquirerSysinfo.mjs';
import { askCreateProjectOrPrintSysinfo } from '../lib/inquirerProject.mjs';
import { askGetGithhubToken } from '../lib/inquirerAuthToken.mjs';
// const program = require('commander');
import { systemInfoViews } from '../views/sysInfoViews.mjs';

// program
// 	.version('1.0.0')
// 	.alias('v')
// 	.description('A very usefull utility tool for developers');

export const setupConfigstore = answerGithubToken => {};

export const setupGithubAuthToken = async () => {
	const answerGithubToken = await askGetGithhubToken();
	console.log(answerGithubToken);
	setupConfigstore(answerGithubToken);

	return {
		answerGithubToken
	};
};

export const setupCreateProject = async () => {
	const answerCreateProjectdOrPrintSysinfo =
		await askCreateProjectOrPrintSysinfo();

	return {
		answerCreateProjectdOrPrintSysinfo
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

// export { setupSysInfo, setupCreateProject, setupGithubAuthToken };
