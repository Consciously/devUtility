#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');
const log = console.log;

const { setupSysInfo, setupCreateProject } = require('./controller/commands');

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
};

init();
