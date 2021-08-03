const sysinfo = require('./systeminformation');
const chalk = require('chalk');
const filesize = require('filesize');

const systemInfoViews = async () => {
	const data = await sysinfo.printSysInfo();

	const dataStandard = Object.fromEntries(Object.entries(data.dataStandard));
	const dataExtended = Object.fromEntries(Object.entries(data.dataExtended));

	const {
		cpu: cpuStd,
		system: systemStd,
		mem: memStd,
		osInfo: osInfoStd,
		diskLayout: diskLayoutStd,
		networkInterfaces: networkInterfacesStd
	} = dataStandard;

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

	// STADARD SYSINFO

	const infoStandard = `
	${chalk.blueBright.bold('CPU Info:')}
	${chalk.whiteBright.bold('Manufacturer:')}               ${cpuStd.manufacturer}
	${chalk.whiteBright.bold('Brand:')}                      ${cpuStd.brand}
	${chalk.whiteBright.bold('Average Speed:')}              ${cpuStd.speed} GHz
	${chalk.whiteBright.bold('Physical Cores / Cores:')}     ${
		cpuStd.physicalCores
	} / ${cpuStd.cores}

	${chalk.blueBright.bold('System Info:')}
	${chalk.whiteBright.bold('Manufacturer:')}               ${
		systemStd.manufacturer
	}
	${chalk.whiteBright.bold('Model:')}                      ${systemStd.model}
	${chalk.whiteBright.bold('Version:')}                    ${systemStd.version}

	${chalk.blueBright.bold('Memory Info:')}
	${chalk.whiteBright.bold('Total:')}                      ${filesize(
		memStd.total
	)}
	${chalk.whiteBright.bold('Used:')}                       ${filesize(
		memStd.used
	)}
	${chalk.whiteBright.bold('Free:')}                       ${filesize(
		memStd.free
	)}

	${chalk.blueBright.bold('OS Info:')}                     
	${chalk.whiteBright.bold('Platform:')}                   ${osInfoStd.platform
		.charAt(0)
		.toUpperCase()}${osInfoStd.platform.slice(1).toLowerCase()}
	${chalk.whiteBright.bold('Distribution:')}               ${osInfoStd.distro}
	${chalk.whiteBright.bold('Kernel:')}                     ${osInfoStd.kernel}

	${chalk.blueBright.bold('Disk Info:')}
	${diskLayoutStd.map(disk => {
		return `
	${chalk.whiteBright.bold('Device:')}                     ${disk.device}
	${chalk.whiteBright.bold('Type:')}                       ${disk.type}
	${chalk.whiteBright.bold('Name:')}                       ${disk.name}
	${chalk.whiteBright.bold('Size:')}                       ${filesize(disk.size)}
		`;
	})}

	${chalk.blueBright.bold('Network Info:')}
	${networkInterfacesStd.map(network => {
		return `
	${chalk.whiteBright.bold('Interface')}                   ${network.iface}
	${chalk.whiteBright.bold('IPv4 Address')}                ${network.ip4}
	${chalk.whiteBright.bold('Ipv4 Subnet Address')}         ${network.ip4subnet}
		`;
	})}
	`;

	// EXTENDED SYSINFO

	const infoExtended = `
	${chalk.blueBright.bold('CPU Info:')}
	${chalk.whiteBright.bold('Manufacturer:')}               ${cpuExt.manufacturer}
	${chalk.whiteBright.bold('Brand:')}                      ${cpuExt.brand}
	${chalk.whiteBright.bold('Average Speed:')}              ${cpuExt.speed} GHz
	${chalk.whiteBright.bold('Physical Cores / Cores:')}     ${
		cpuExt.physicalCores
	} / ${cpuExt.cores}
	${chalk.whiteBright.bold('Processors:')}                  ${cpuExt.processors}
	${chalk.whiteBright.bold('Socket:')}                       ${cpuExt.socket}
	${chalk.whiteBright.bold('Vendor:')}                       ${cpuExt.vendor}
	${chalk.whiteBright.bold('Family:')}                       ${cpuExt.family}
	${chalk.whiteBright.bold('Model:')}                        ${cpuExt.model}
	${chalk.whiteBright.bold('Voltage:')}                      ${cpuExt.voltage}
	${chalk.whiteBright.bold('Virtualization:')}               ${
		cpuExt.virtualization
	}
	${chalk.whiteBright.bold('Cache:')}
	${chalk.whiteBright.bold('L1 Data')}                       ${filesize(
		cpuExt.cache.l1d
	)}
	${chalk.whiteBright.bold('L1 Instruction')}                ${filesize(
		cpuExt.cache.l1i
	)}
	${chalk.whiteBright.bold('L2')}                            ${filesize(
		cpuExt.cache.l2
	)}
	${chalk.whiteBright.bold('L3')}                            ${filesize(
		cpuExt.cache.l3
	)}

	${chalk.blueBright.bold('System Info:')}
	${chalk.whiteBright.bold('Manufacturer:')}               ${
		systemExt.manufacturer
	}
	${chalk.whiteBright.bold('Model:')}                      ${systemExt.model}
	${chalk.whiteBright.bold('Version:')}                    ${systemExt.version}
	${chalk.whiteBright.bold('Serial:')}                     ${systemExt.serial}
	${chalk.whiteBright.bold('Virtual:')}                    ${systemExt.virtual}
	${chalk.whiteBright.bold('Virtual Host:')}               ${
		systemExt.virtualHost
	}

	${chalk.blueBright.bold('Bios Info:')}
	${chalk.whiteBright.bold('Vendor:')}                     ${biosExt.vendor}
	${chalk.whiteBright.bold('Version:')}                    ${biosExt.version}
	${chalk.whiteBright.bold('Release Date:')}               ${biosExt.releaseDate}
	${chalk.whiteBright.bold('Language:')}                   ${biosExt.language}
	${chalk.whiteBright.bold('Features:')}                   ${biosExt.features}

	${chalk.blueBright.bold('Motherboard Info:')}
	${chalk.whiteBright.bold('Manufacturer')}                ${
		baseboardExt.manufacturer
	}
	${chalk.whiteBright.bold('Model')}                       ${baseboardExt.model}
	${chalk.whiteBright.bold('Version')}                     ${baseboardExt.version}
	${chalk.whiteBright.bold('Serial')}                      ${baseboardExt.serial}
	${chalk.whiteBright.bold('Memory Max')}                  ${filesize(
		baseboardExt.memMax
	)}
	${chalk.whiteBright.bold('Memory Slots')}                ${
		baseboardExt.memSlots
	}

	${chalk.blueBright.bold('Memory Info:')}
	${chalk.whiteBright.bold('Total:')}                      ${filesize(
		memExt.total
	)}
	${chalk.whiteBright.bold('Used:')}                       ${filesize(
		memExt.used
	)}
	${chalk.whiteBright.bold('Free:')}                       ${filesize(
		memExt.free
	)}
	${chalk.whiteBright.bold('Active:')}                     ${filesize(
		memExt.active
	)}
	${chalk.whiteBright.bold('Buffers:')}                    ${filesize(
		memExt.buffers
	)}
	${chalk.whiteBright.bold('Cached:')}                     ${filesize(
		memExt.cached
	)}
	${chalk.whiteBright.bold('Available:')}                  ${filesize(
		memExt.available
	)}
	${chalk.whiteBright.bold('Swaptotal:')}                  ${filesize(
		memExt.swaptotal
	)}
	${chalk.whiteBright.bold('Swapused:')}                   ${filesize(
		memExt.swapused
	)}
	${chalk.whiteBright.bold('Swapfree:')}                   ${filesize(
		memExt.swapfree
	)}
	${memLayoutExt.map(mem => {
		return `
	${chalk.whiteBright.bold('Size:')}                       ${filesize(mem.size)}
	${chalk.whiteBright.bold('Bank:')}                       ${mem.bank}
	${chalk.whiteBright.bold('Type:')}                       ${mem.type}
	${chalk.whiteBright.bold('ECC:')}                        ${mem.ecc}
	${chalk.whiteBright.bold('Clock Speed:')}                ${mem.clockSpeed}
	${chalk.whiteBright.bold('Form Factor:')}                ${mem.formFactor}
	${chalk.whiteBright.bold('Manufacture:')}                ${mem.manufacture}
	${chalk.whiteBright.bold('Serial Number:')}              ${mem.serialNum}
	${chalk.whiteBright.bold('Voltage Configured:')}         ${
			mem.voltageConfigured
		}
		`;
	})}
	
	${chalk.blueBright.bold('OS Info:')}                     
	${chalk.whiteBright.bold('Platform:')}                   ${osInfoExt.platform
		.charAt(0)
		.toUpperCase()}${osInfoExt.platform.slice(1).toLowerCase()}
	${chalk.whiteBright.bold('Distribution:')}               ${osInfoExt.distro}
	${chalk.whiteBright.bold('Kernel:')}                     ${osInfoExt.kernel}
	${chalk.whiteBright.bold('Codename:')}                   ${osInfoExt.codename}
	${chalk.whiteBright.bold('Hostname:')}                   ${osInfoExt.hostname}
	${chalk.whiteBright.bold('Architecture:')}               ${osInfoExt.arch}
	${chalk.whiteBright.bold('Fqdn:')}                       ${osInfoExt.fqdn}
	${chalk.whiteBright.bold('Logofile:')}                   ${osInfoExt.logofile}
	${chalk.whiteBright.bold('Codepage:')}                   ${osInfoExt.codepage}
	${chalk.whiteBright.bold('Uefi:')}                       ${osInfoExt.uefi}

	${chalk.blueBright.bold('Versions:')}
	${chalk.whiteBright.bold('Kernel:')}                     ${versionsExt.kernel}
	${chalk.whiteBright.bold('Node:')}                       ${versionsExt.node}
	${chalk.whiteBright.bold('Npm:')}                        ${versionsExt.npm}
	${chalk.whiteBright.bold('Mongodb:')}                    ${versionsExt.kernel}
	${chalk.whiteBright.bold('Bash:')}                       ${versionsExt.bash}
	${chalk.whiteBright.bold('Zsh:')}                        ${versionsExt.zsh}
	${chalk.whiteBright.bold('Git:')}                        ${versionsExt.git}
	${chalk.whiteBright.bold('v8:')}                         ${versionsExt.v8}

	${chalk.blueBright.bold('Disk Info:')}
	${diskLayoutExt.map(disk => {
		return `
	${chalk.whiteBright.bold('Device:')}                     ${disk.device}
	${chalk.whiteBright.bold('Type:')}                       ${disk.type}
	${chalk.whiteBright.bold('Name:')}                       ${disk.name}
	${chalk.whiteBright.bold('Size:')}                       ${filesize(disk.size)}
	${chalk.whiteBright.bold('Vendor:')}                     ${disk.vendor}
	${chalk.whiteBright.bold('Smart Data:')}                 ${disk.smartData}
	${chalk.whiteBright.bold('Smart tatus:')}                ${disk.smartStatus}
	${chalk.whiteBright.bold('Interface Type:')}             ${disk.interfaceType}
		`;
	})}

	${fsSizeExt.map(fs => {
		return `
	${chalk.whiteBright.bold('File System:')}                ${fs.fs}
	${chalk.whiteBright.bold('Type:')}                       ${fs.type}
	${chalk.whiteBright.bold('Size:')}                       ${filesize(fs.size)}
	${chalk.whiteBright.bold('used:')}                       ${filesize(fs.used)}
	${chalk.whiteBright.bold('Available:')}                  ${filesize(
			fs.available
		)}
	${chalk.whiteBright.bold('Mount:')}                      ${fs.mount}
		`;
	})}

	${chalk.blueBright.bold('Network Info:')}
	${networkInterfacesExt.map(network => {
		return `
	${chalk.whiteBright.bold('Interface')}                   ${network.iface}
	${chalk.whiteBright.bold('IPv4 Address')}                ${network.ip4}
	${chalk.whiteBright.bold('Ipv4 Subnet Address')}         ${network.ip4subnet}
	${chalk.whiteBright.bold('Mac')}                         ${network.mac}
	${chalk.whiteBright.bold('Dhcp')}                        ${network.dhcp}
	${chalk.whiteBright.bold('Speed')}                       ${
			network.speed
		} MBit / s
		`;
	})}
	`;

	return { infoStandard, infoExtended };
};
// systemInfoViews();
module.exports = {
	systemInfoViews
};
