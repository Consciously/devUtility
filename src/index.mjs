#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
const log = console.log;

import {
	setupCreateProject,
	setupSysInfo,
	setupGithubAuthToken
} from './controller/commands.mjs';

const intro = () => {
	return {
		headline: chalk.whiteBright.bold.bgBlackBright(
			figlet.textSync('DevUtility', {
				font: 'Small Slant',
				horizontalLayout: 'fitted',
				width: 150
			})
		),
		tagline: chalk.whiteBright.bold(
			'A very usefull utility tool for developers'
		)
	};
};

const getGithubToken = async () => {
	const { answerGithubToken } = await setupGithubAuthToken();

	return {
		answerGithubToken
	};
};

const getCreateProject = async () => {
	const { answerCreateProjectdOrPrintSysinfo } = await setupCreateProject();

	return {
		answerCreateProjectdOrPrintSysinfo
	};
};

const getSysinfo = async () => {
	const { answerSysinfo, dataStandard, dataExtended } = await setupSysInfo();

	return {
		answerSysinfo,
		dataStandard,
		dataExtended
	};
};

const init = async () => {
	clear();
	intro();

	console.log(intro().headline);
	console.log(intro().tagline);

	const {
		answerGithubToken: { githubToken }
	} = await getGithubToken();

	if (githubToken) {
		// console.log(answerGithubToken.githubToken);
		const project = await getCreateProject();
		const { projectOrSysinfo } = project.answerCreateProjectdOrPrintSysinfo;
		if (projectOrSysinfo === 'Create Project') {
			console.log('You want a new project');
		} else {
			const sysinfo = await getSysinfo();
			const {
				answerSysinfo: { sysvariant },
				dataStandard,
				dataExtended
			} = sysinfo;
			const {
				tableStd,
				tableCPUStd,
				tableSystemStd,
				tableMemoryStd,
				tableOSStd,
				tableDiskStd,
				tableNetworkStd
			} = dataStandard;
			const {
				tableExt,
				tableCpuExt,
				tableSystemExt,
				tableBiosExt,
				tableMotherboardExt,
				tableMemoryExt,
				tableMemoryLayoutExt,
				tableOSExt,
				tableVersionsExt,
				tableDiskExt,
				tableFSExt,
				tableNetworkExt
			} = dataExtended;
			if (sysvariant === 'Standard') {
				log(tableStd.toString()),
					log(tableCPUStd.toString()),
					log(tableSystemStd.toString()),
					log(tableMemoryStd.toString()),
					log(tableOSStd.toString()),
					log(tableDiskStd.toString()),
					log(tableNetworkStd.toString());
			} else {
				log(tableExt.toString()),
					log(tableCpuExt.toString()),
					log(tableSystemExt.toString()),
					log(tableBiosExt.toString()),
					log(tableMotherboardExt.toString()),
					log(tableMemoryExt.toString()),
					log(tableMemoryLayoutExt.toString()),
					log(tableOSExt.toString()),
					log(tableVersionsExt.toString()),
					log(tableDiskExt.toString()),
					log(tableFSExt.toString()),
					log(tableNetworkExt.toString());
			}
		}
	}
};
init();
