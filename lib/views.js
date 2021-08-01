const sysinfo = require('./systeminformation');
const chalk = require('chalk');

const systemInfoViews = async () => {
	const { dataStandard, dataExtended } = await sysinfo.printSysInfo();

	// STADARD SYSINFO

	const infoStandard = `
		${chalk.blueBright.bold('CPU Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${
		dataStandard.cpu.manufacturer
	}
		${chalk.whiteBright.bold('Brand:')}                   ${dataStandard.cpu.brand}
		${chalk.whiteBright.bold('Speed:')}                   ${
		dataStandard.cpu.speed
	} GHz

		${chalk.blueBright.bold('System Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${
		dataStandard.system.manufacturer
	}
		${chalk.whiteBright.bold('Model:')}                   ${
		dataStandard.system.model
	}
		${chalk.whiteBright.bold('Version:')}                 ${
		dataStandard.system.version
	}
    
    ${chalk.blueBright.bold('Memor Infos:')}

    ${chalk.whiteBright.bold('Total:')}                   ${
		dataStandard.mem.total
	}
    ${chalk.whiteBright.bold('Used:')}                    ${
		dataStandard.mem.used
	}
    ${chalk.whiteBright.bold('Free:')}                    ${
		dataStandard.mem.free
	}

    ${chalk.blueBright.bold('OS Infos:')}

    ${chalk.whiteBright.bold('Platform:')}                 ${
		dataStandard.osInfo.platform
	}
    ${chalk.whiteBright.bold('Distro:')}                   ${
		dataStandard.osInfo.distro
	}
    ${chalk.whiteBright.bold('Kernel:')}                   ${
		dataStandard.osInfo.kernel
	}

    ${chalk.blueBright.bold('Disk Infos')}

    ${chalk.whiteBright.bold('Device:')}                   ${
		dataStandard.diskLayout.device
	}
    ${chalk.whiteBright.bold('Type:')}                     ${
		dataStandard.diskLayout.type
	}
    ${chalk.whiteBright.bold('Name:')}                     ${
		dataStandard.diskLayout.name
	}
    ${chalk.whiteBright.bold('Size:')}                     ${
		dataStandard.diskLayout.size
	}

    ${chalk.blueBright.bold('Network Infos:')}

    ${chalk.whiteBright.bold('Interface Name:')}           ${
		dataStandard.networkInterfaces.ifaceName
	}
    ${chalk.whiteBright.bold('Interface:')}                ${
		dataStandard.networkInterfaces.iface
	}
    ${chalk.whiteBright.bold('IPv4 Address:')}             ${
		dataStandard.networkInterfaces.ip4
	}
  ${chalk.whiteBright.bold('IPv4 Subnet Address:')}        ${
		dataStandard.networkInterfaces.ip4subnet
	}                        
    `;

	// EXTENDED SYSINFO

	const infoExtended = `
    // CPU
    ${chalk.blueBright.bold('CPU Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${
		dataExtended.cpu.manufacturer
	}
		${chalk.whiteBright.bold('Brand:')}                   ${dataExtended.cpu.brand}
		${chalk.whiteBright.bold('Speed:')}                   ${
		dataExtended.cpu.speed
	} GHz
    ${chalk.whiteBright.bold('Cors:')}                    ${
		dataExtended.cpu.cors
	}
    ${chalk.whiteBright.bold('Physical Cores:')}          ${
		dataExtended.cpu.physicalCores
	}
    ${chalk.whiteBright.bold('Processors:')}              ${
		dataExtended.cpu.processors
	}
    ${chalk.whiteBright.bold('Socket:')}                  ${
		dataExtended.cpu.socket
	}
    ${chalk.whiteBright.bold('Vendor:')}                  ${
		dataExtended.cpu.vendor
	}
    ${chalk.whiteBright.bold('Family:')}                  ${
		dataExtended.cpu.family
	}
    ${chalk.whiteBright.bold('Model:')}                   ${
		dataExtended.cpu.model
	}
    ${chalk.whiteBright.bold('Voltage:')}                 ${
		dataExtended.cpu.voltage
	}
    ${chalk.whiteBright.bold('Virtualization:')}          ${
		dataExtended.cpu.virtualization
	}
    ${chalk.whiteBright.bold('Cache:')}                   ${
		dataExtended.cpu.cache
	}

    // System
		${chalk.blueBright.bold('System Infos:')}

		${chalk.whiteBright.bold('Manufacturer:')}            ${
		dataExtended.system.manufacturer
	}
		${chalk.whiteBright.bold('Model:')}                   ${
		dataExtended.system.model
	}
		${chalk.whiteBright.bold('Version:')}                 ${
		dataExtended.system.version
	}
		${chalk.whiteBright.bold('Serial:')}                  ${
		dataExtended.system.serial
	}
		${chalk.whiteBright.bold('Virtual:')}                 ${
		dataExtended.system.virtual
	}
		${chalk.whiteBright.bold('virtual Host:')}            ${
		dataExtended.system.virtualHost
	}
    
    // Memory
    ${chalk.blueBright.bold('Memory Infos:')}

    ${chalk.whiteBright.bold('Total:')}                   ${
		dataExtended.mem.total
	}
    ${chalk.whiteBright.bold('Used:')}                    ${
		dataExtended.mem.used
	}
    ${chalk.whiteBright.bold('Free:')}                    ${
		dataExtended.mem.free
	}
    ${chalk.whiteBright.bold('Active:')}                  ${
		dataExtended.mem.active
	}
    ${chalk.whiteBright.bold('Buffers:')}                 ${
		dataExtended.mem.buffers
	}
    ${chalk.whiteBright.bold('Cached:')}                  ${
		dataExtended.mem.cached
	}
    ${chalk.whiteBright.bold('Available:')}               ${
		dataExtended.mem.available
	}
    ${chalk.whiteBright.bold('Swaptotal:')}               ${
		dataExtended.mem.swaptotal
	}
    ${chalk.whiteBright.bold('Swapused:')}                ${
		dataExtended.mem.swapused
	}
    ${chalk.whiteBright.bold('Swapfree:')}                ${
		dataExtended.mem.swapfree
	}
    ${chalk.whiteBright.bold('Size:')}                    ${
		dataExtended.memLayout.size
	}
    ${chalk.whiteBright.bold('Bank:')}                    ${
		dataExtended.memLayout.bank
	}
    ${chalk.whiteBright.bold('Type:')}                    ${
		dataExtended.memLayout.type
	}
    ${chalk.whiteBright.bold('Ecc:')}                     ${
		dataExtended.memLayout.ecc
	}
    ${chalk.whiteBright.bold('Clock Speed:')}             ${
		dataExtended.memLayout.clockSpeed
	}
    ${chalk.whiteBright.bold('Form Factor:')}             ${
		dataExtended.memLayout.formFactor
	}
    ${chalk.whiteBright.bold('Voltage Configured:')}      ${
		dataExtended.memLayout.voltageConfigured
	}

    // Bios
    ${chalk.blueBright.bold('Bios Infos:')}

    ${chalk.whiteBright.bold('Vendor:')}                  ${
		dataExtended.bios.vendor
	}
    ${chalk.whiteBright.bold('Version:')}                 ${
		dataExtended.bios.version
	}
    ${chalk.whiteBright.bold('ReleaseDate:')}             ${
		dataExtended.bios.releaseDate
	}
    ${chalk.whiteBright.bold('Language:')}                ${
		dataExtended.bios.language
	}
    ${chalk.whiteBright.bold('Features:')}                ${
		dataExtended.bios.features
	}

    // Motherboard
    ${chalk.blueBright.bold('Motherboard Infos:')}

    ${chalk.whiteBright.bold('Manufacturer:')}            ${
		dataExtended.baseboard.language
	}
    ${chalk.whiteBright.bold('Model:')}                   ${
		dataExtended.baseboard.model
	}
    ${chalk.whiteBright.bold('Version:')}                 ${
		dataExtended.baseboard.version
	}
    ${chalk.whiteBright.bold('Serial:')}                  ${
		dataExtended.baseboard.serial
	}
    ${chalk.whiteBright.bold('Max of Memory:')}           ${
		dataExtended.baseboard.memMax
	}
    ${chalk.whiteBright.bold('Max of Memory Slots:')}     ${
		dataExtended.baseboard.memSlots
	}
    // OS Info
    ${chalk.blueBright.bold('OS Info:')}

    ${chalk.whiteBright.bold('Platform:')}                ${
		dataExtended.osInfo.platform
	}
    ${chalk.whiteBright.bold('Distro:')}                  ${
		dataExtended.osInfo.distro
	}
    ${chalk.whiteBright.bold('Kernel:')}                  ${
		dataExtended.osInfo.kernel
	}
    ${chalk.whiteBright.bold('Codename:')}                ${
		dataExtended.osInfo.codename
	}
    ${chalk.whiteBright.bold('Hostname:')}                ${
		dataExtended.osInfo.hostname
	}
    ${chalk.whiteBright.bold('Architecture:')}            ${
		dataExtended.osInfo.arch
	}
    ${chalk.whiteBright.bold('Fqdn:')}                    ${
		dataExtended.osInfo.fqdn
	}
    ${chalk.whiteBright.bold('Logofile:')}                ${
		dataExtended.osInfo.logofile
	}
    ${chalk.whiteBright.bold('Codepage:')}                ${
		dataExtended.osInfo.codepage
	}
    ${chalk.whiteBright.bold('Uefi:')}                    ${
		dataExtended.osInfo.uefi
	}

    // Versions
    ${chalk.blueBright.bold('Versions:')}

    ${chalk.whiteBright.bold('Kernel:')}                  ${
		dataExtended.versions.kernel
	}
    ${chalk.whiteBright.bold('Node:')}                    ${
		dataExtended.versions.node
	}
    ${chalk.whiteBright.bold('Npm:')}                     ${
		dataExtended.versions.npm
	}
    ${chalk.whiteBright.bold('Mongodb:')}                 ${
		dataExtended.versions.mongodb
	}
    ${chalk.whiteBright.bold('Bash:')}                    ${
		dataExtended.versions.bash
	}
    ${chalk.whiteBright.bold('Zsh:')}                     ${
		dataExtended.versions.zsh
	}
    ${chalk.whiteBright.bold('Git:')}                     ${
		dataExtended.versions.git
	}
    ${chalk.whiteBright.bold('V8:')}                      ${
		dataExtended.versions.v8
	}

    // Disk Info
    ${chalk.blueBright.bold('Disk Info:')}

    ${chalk.whiteBright.bold('Device:')}                  ${
		dataExtended.diskLayout.device
	}
    ${chalk.whiteBright.bold('Type:')}                    ${
		dataExtended.diskLayout.type
	}
    ${chalk.whiteBright.bold('Name:')}                    ${
		dataExtended.diskLayout.name
	}
    ${chalk.whiteBright.bold('Size:')}                    ${
		dataExtended.diskLayout.size
	}
    ${chalk.whiteBright.bold('Vendor:')}                  ${
		dataExtended.diskLayout.vendor
	}
    ${chalk.whiteBright.bold('Smart Data:')}              ${
		dataExtended.diskLayout.smartData
	}
    ${chalk.whiteBright.bold('Smart Status:')}            ${
		dataExtended.diskLayout.smartStatus
	}
    ${chalk.whiteBright.bold('Interface Type:')}          ${
		dataExtended.diskLayout.interfaceType
	}
    ${chalk.whiteBright.bold('Total Sectors:')}           ${
		dataExtended.diskLayout.totalSectors
	}
    ${chalk.whiteBright.bold('Total Cylinders:')}         ${
		dataExtended.diskLayout.totalCylinders
	}
    ${chalk.whiteBright.bold('Total Heads:')}             ${
		dataExtended.diskLayout.totalHeads
	}

    // Filesize Info
    ${chalk.blueBright.bold('Filesize Info:')}

    ${chalk.whiteBright.bold('Fs:')}                      ${
		dataExtended.fsSize.fs
	}
    ${chalk.whiteBright.bold('Type:')}                    ${
		dataExtended.fsSize.type
	}
    ${chalk.whiteBright.bold('Size:')}                    ${
		dataExtended.fsSize.size
	}
    ${chalk.whiteBright.bold('Used:')}                    ${
		dataExtended.fsSize.used
	}
    ${chalk.whiteBright.bold('Available:')}               ${
		dataExtended.fsSize.available
	}
    ${chalk.whiteBright.bold('Use:')}                     ${
		dataExtended.fsSize.use
	}
    ${chalk.whiteBright.bold('Mount:')}                   ${
		dataExtended.fsSize.mount
	}

    // Network Info
    ${chalk.blueBright.bold('Network Infos:')}

    ${chalk.whiteBright.bold('Interface Name:')}          ${
		dataExtended.networkInterfaces.ifaceName
	}
    ${chalk.whiteBright.bold('Interface:')}               ${
		dataExtended.networkInterfaces.iface
	}
    ${chalk.whiteBright.bold('IPv4 Address:')}            ${
		dataExtended.networkInterfaces.ip4
	}
  ${chalk.whiteBright.bold('IPv4 Subnet Address:')}       ${
		dataExtended.networkInterfaces.ip4subnet
	}                        
  `;

	return { infoStandard, infoExtended };
};

systemInfoViews();

module.exports = {
	systemInfoViews
};
