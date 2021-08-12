#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
const log = console.log;

import {
	setupChooseProjectOrSysinfo,
	setupSysInfo,
	setupGithubAuthToken,
	setupGithubRest
} from './controller/commands.mjs';

import { useConfigstore } from './config/configstore.mjs';

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

const getChooseProjectOrSysinfo = async () => {
	const { answerChooseProjectdOrPrintSysinfo } =
		await setupChooseProjectOrSysinfo();

	return {
		answerChooseProjectdOrPrintSysinfo
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

	const choose = await getChooseProjectOrSysinfo();
	const { projectOrSysinfo } = choose.answerChooseProjectdOrPrintSysinfo;
	if (projectOrSysinfo === 'Create Project') {
		const token = useConfigstore();

		if (token) {
			const { login, name, html_url, location } = await setupGithubRest(
				token.githubToken
			);

			console.log('Login Name:', login);
			console.log('Name:', name);
			console.log('URL:', html_url);
			console.log('Location:', location);
		} else {
			const { answerGithubToken } = await getGithubToken();
			useConfigstore(answerGithubToken.githubToken);
		}
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
};
init();
