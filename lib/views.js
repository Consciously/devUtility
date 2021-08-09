const chalk = require('chalk');
const filesize = require('filesize');
const Table = require('cli-table3');
const sysinfo = require('./systeminformation');
const fileSize = require('filesize');

const table = new Table({
	head: ['Categories', 'Subcategories', 'Values'],
	colWidths: [20, 20, 20]
});

const tableCPUStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableSystemStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableMemoryStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableOSStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableDiskStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableNetworkStnd = new Table({
	colWidths: [20, 20, 20]
});

const tableCPUExt = new Table({
	colWidths: [20, 20, 20]
});

const tableSystemExt = new Table({
	colWidths: [20, 20, 20]
});

const tableBiosExt = new Table({
	colWidths: [20, 20, 20]
});

const tableBaseboardExt = new Table({
	colWidths: [20, 20, 20]
});

const tableMemoryExt = new Table({
	colWidths: [20, 20, 20]
});

const tableMemoryLayoutExt = new Table({
	colWidths: [20, 20, 20]
});

const tableOSExt = new Table({
	colWidths: [20, 20, 20]
});

const tableVersionsExt = new Table({
	colWidths: [20, 20, 20]
});

const tableDiskExt = new Table({
	colWidths: [20, 20, 20]
});

const tableFsSizeExt = new Table({
	colWidths: [20, 20, 20]
});

const tableNetworkExt = new Table({
	colWidths: [20, 20, 20]
});

const systemInfoViews = async () => {
	const data = await sysinfo.printSysInfo();

	const dataStandard = Object.fromEntries(Object.entries(data.dataStandard));
	const dataExtended = Object.fromEntries(Object.entries(data.dataExtended));

	const printDataStandard = () => {
		const {
			cpu: cpuStd,
			system: systemStd,
			mem: memStd,
			osInfo: osInfoStd,
			diskLayout: diskLayoutStd,
			networkInterfaces: networkInterfacesStd
		} = dataStandard;

		tableCPUStnd.push(
			[`${chalk.blueBright.bold('CPU Info')}`, '', ''],
			['', 'Manufacturer', `${cpuStd.manufacturer}`],
			['', 'Brand', `${cpuStd.brand}`],
			['', 'Average Speed', `${cpuStd.speed} GHz`],
			[
				'',
				'Physical Cores / Cores',
				`${cpuStd.physicalCores} / ${cpuStd.cores}`
			]
		);

		tableSystemStnd.push(
			[`${chalk.blueBright.bold('System Info')}`, '', ''],
			['', 'Manufacturer', `${systemStd.manufacturer}`],
			['', 'Model', `${systemStd.model}`],
			['', 'Version', `${systemStd.version}`]
		);

		tableMemoryStnd.push(
			[`${chalk.blueBright.bold('Memory Info')}`, '', ''],
			['', 'Total', `${filesize(memStd.total)}`],
			['', 'Used', `${filesize(memStd.used)}`],
			['', 'Free', `${filesize(memStd.free)}`]
		);

		tableOSStnd.push(
			[`${chalk.blueBright.bold('OS Info')}`, '', ''],
			['', 'Platform', `${osInfoStd.platform}`],
			['', 'Distribution', `${osInfoStd.distro}`],
			['', 'Kernel', `${osInfoStd.kernel}`]
		);

		diskLayoutStd.map(disk =>
			tableDiskStnd.push(
				[`${chalk.blueBright.bold('Disk Info')}`, '', ''],
				['', 'Device', `${disk.device}`],
				['', 'Name', `${disk.name}`],
				['', 'Type', `${disk.type}`],
				['', 'Size', `${fileSize(disk.size)}`]
			)
		);

		networkInterfacesStd.map(network =>
			tableNetworkStnd.push(
				[`${chalk.blueBright.bold('Network Info')}`, '', ''],
				['', 'Interface', `${network.iface}`],
				['', 'IPv4 Address', `${network.ip4}`],
				['', 'Ipv4 Subnet Address', `${network.ip4subnet}`]
			)
		);

		return {
			tableStd: table.toString(),
			tableCPU: tableCPUStnd.toString(),
			tableSystem: tableSystemStnd.toString(),
			tableMemory: tableMemoryStnd.toString(),
			tableOS: tableOSStnd.toString(),
			tableDisk: tableDiskStnd.toString(),
			tableNetwork: tableNetworkStnd.toString()
		};
	};

	const printDataExtended = () => {
		const {
			cpu: cpuExt,
			system: systemExt,
			bios: biosExt,
			baseboard: baseboardExt,
			mem: memExt,
			memLayout: memLayoutExt,
			osInfo: osInfoExt,
			versions: versionsExt,
			diskLayout: diskLayoutExt,
			fsSize: fsSizeExt,
			networkInterfaces: networkInterfacesExt
		} = dataExtended;

		tableCPUExt.push(
			[`${chalk.blueBright.bold('CPU Info')}`, '', ''],
			['', 'Manufacturer', `${cpuExt.manufacturer}`],
			['', 'Brand', `${cpuExt.brand}`],
			['', 'Average Speed', `${cpuExt.speed} GHz`],
			[
				'',
				'Physical Cores / Cores',
				`${cpuExt.physicalCores} / ${cpuExt.cores}`
			],
			['', 'Processor', `${cpuExt.processors}`],
			['', 'Socket', `${cpuExt.socket}`],
			['', 'Vendor', `${cpuExt.vendor}`],
			['', 'Family', `${cpuExt.family}`],
			['', 'Model', `${cpuExt.model}`],
			['', 'Voltage', `${cpuExt.voltage}`],
			['', 'Virtualization', `${cpuExt.virtualization}`],
			['', 'L1 Cache Data', `${fileSize(cpuExt.cache.l1d)}`],
			['', 'L1 Cache Instruction', `${fileSize(cpuExt.cache.l1i)}`],
			['', 'L2 Cache', `${fileSize(cpuExt.cache.l2)}`],
			['', 'L3 Cache', `${fileSize(cpuExt.cache.l3)}`]
		);

		tableSystemExt.push(
			[`${chalk.blueBright.bold('System Info')}`, '', ''],
			['', 'Manufacturer', `${systemExt.manufacturer}`],
			['', 'Model', `${systemExt.model}`],
			['', 'Version', `${systemExt.version}`],
			['', 'Serial Number', `${systemExt.serial}`],
			['', 'Is Virtual', `${systemExt.virtual}`],
			['', 'virtualHost', `${systemExt.virtualHost}`]
		);

		tableBiosExt.push(
			[`${chalk.blueBright.bold('Bios Info')}`, '', ''],
			['', 'Vendor', `${biosExt.vendor}`],
			['', 'Version', `${biosExt.version}`],
			['', 'Release Date', `${biosExt.releaseDate}`],
			['', 'Language', `${biosExt.language}`],
			['', 'Features', `${biosExt.features}`]
		);

		tableBaseboardExt.push(
			[`${chalk.blueBright.bold('Motherboard Info')}`, '', ''],
			['', 'Manufacturer', `${baseboardExt.manufacturer}`],
			['', 'Model', `${baseboardExt.model}`],
			['', 'Version', `${baseboardExt.version}`],
			['', 'Serial', `${baseboardExt.serial}`],
			['', 'Max Memory', `${fileSize(baseboardExt.memMax)}`],
			['', 'Memory Slots', `${baseboardExt.memSlots}`]
		);

		tableMemoryExt.push(
			[`${chalk.blueBright.bold('Memory Info')}`, '', ''],
			['', 'Total', `${fileSize(memExt.total)}`],
			['', 'Used', `${fileSize(memExt.used)}`],
			['', 'Free', `${fileSize(memExt.free)}`],
			['', 'Active', `${fileSize(memExt.active)}`],
			['', 'Buffers', `${fileSize(memExt.buffers)}`],
			['', 'Cached', `${fileSize(memExt.cached)}`],
			['', 'Available', `${fileSize(memExt.available)}`],
			['', 'Swaptotal', `${fileSize(memExt.swaptotal)}`],
			['', 'Swapused', `${fileSize(memExt.swapused)}`],
			['', 'Swapfree', `${fileSize(memExt.swapfree)}`]
		);

		memLayoutExt.map(memLayout =>
			tableMemoryLayoutExt.push(
				[`${chalk.blueBright.bold('Memory Layout Info')}`, '', ''],
				['', 'Size', `${fileSize(memLayout.size)}`],
				['', 'Bank', `${memLayout.bank}`],
				['', 'Type', `${memLayout.type}`],
				['', 'Ecc', `${memLayout.ecc}`],
				['', 'Clock Speed', `${memLayout.clockSpeed}`],
				['', 'Form Factor', `${memLayout.formFactor}`],
				['', 'Manufacture', `${memLayout.manufacture}`],
				['', 'Serial Number', `${memLayout.serialNum}`],
				['', 'Voltage Configured', `${memLayout.voltageConfigured}`]
			)
		);

		tableOSExt.push(
			[`${chalk.blueBright.bold('OS Info')}`, '', ''],
			['', 'Platform', `${osInfoExt.platform}`],
			['', 'Distro', `${osInfoExt.distro}`],
			['', 'Kernel', `${osInfoExt.kernel}`],
			['', 'Codename', `${osInfoExt.codename}`],
			['', 'Hostname', `${osInfoExt.hostname}`],
			['', 'Architecture', `${osInfoExt.arch}`],
			['', 'Fqdn', `${osInfoExt.fqdn}`],
			['', 'Logofile', `${osInfoExt.logofile}`],
			['', 'Vodepage', `${osInfoExt.codepage}`],
			['', 'Uefi', `${osInfoExt.uefi}`]
		);

		tableVersionsExt.push(
			[`${chalk.blueBright.bold('Versions Info')}`, '', ''],
			['', 'Kernel', `${versionsExt.kernel}`],
			['', 'Node', `${versionsExt.node}`],
			['', 'Npm', `${versionsExt.npm}`],
			['', 'Mongodb', `${versionsExt.mongodb}`],
			['', 'Bash', `${versionsExt.bash}`],
			['', 'Zsh', `${versionsExt.zsh}`],
			['', 'Git', `${versionsExt.git}`],
			['', 'V8', `${versionsExt.v8}`]
		);

		diskLayoutExt.map(disk =>
			tableDiskExt.push(
				[`${chalk.blueBright.bold('Disk Info')}`, '', ''],
				['', 'Device', `${disk.device}`],
				['', 'type', `${disk.type}`],
				['', 'name', `${disk.name}`],
				['', 'size', `${fileSize(disk.size)}`],
				['', 'vendor', `${disk.vendor}`],
				['', 'smartData', `${disk.smartData}`],
				['', 'smartStatus', `${disk.smartStatus}`],
				['', 'interfaceType', `${disk.interfaceType}`]
			)
		);

		fsSizeExt.map(fsize =>
			tableFsSizeExt.push(
				[`${chalk.blueBright.bold('Filesize Info')}`, '', ''],
				['', 'File System', `${fsize.fs}`],
				['', 'Type', `${fsize.type}`],
				['', 'Size', `${fileSize(fsize.size)}`],
				['', 'Used', `${fileSize(fsize.used)}`],
				['', 'Available', `${fileSize(fsize.available)}`],
				['', 'Mountpoint', `${fsize.mount}`]
			)
		);

		networkInterfacesExt.map(network =>
			tableNetworkExt.push(
				[`${chalk.blueBright.bold('Network Info')}`, '', ''],
				['', 'Network Name', `${network.iface}`],
				['', 'Ip Address', `${network.ip4}`],
				['', 'Ip Subnet Address', `${network.ip4subnet}`],
				['', 'Mac Address', `${network.mac}`],
				['', 'Dhcp', `${network.ifaceName}`],
				['', 'Speed', `${network.speed} Gbit/s`]
			)
		);

		return {
			tableExt: tableCPUExt.toString(),
			tableSystem: tableSystemExt.toString(),
			tableBios: tableBiosExt.toString(),
			tableMotherboard: tableBaseboardExt.toString(),
			tableMemory: tableMemoryExt.toString(),
			tableMemoryLayout: tableMemoryLayoutExt.toString(),
			tableOS: tableOSExt.toString(),
			tableVersions: tableVersionsExt.toString(),
			tableDisk: tableDiskExt.toString(),
			tableFS: tableFsSizeExt.toString(),
			tableNetwork: tableNetworkExt.toString()
		};
	};

	return { printDataStandard, printDataExtended };
};

systemInfoViews();
module.exports = {
	systemInfoViews
};
