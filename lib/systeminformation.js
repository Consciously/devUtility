const si = require('systeminformation');

const printSysInfo = async () => {
	const standardSystemView = {
		cpu: 'manufacturer, brand, speed, cores, physicalCores',
		system: 'manufacturer, model, version',
		mem: 'total, used, free',
		osInfo: 'platform, distro, kernel',
		diskLayout: 'device, type, name, size',
		networkInterfaces: 'iface, ip4, ip4subnet'
	};

	const extendedSystemView = {
		cpu: 'manufacturer, brand, speed, cores, physicalCores, processors, socket, vendor, family, model, voltage, virtualization, cache',
		system: 'manufacturer, model, version, serial, virtual, virtualHost',
		bios: 'vendor, version, releaseDate, language, features',
		baseboard: 'manufacturer, model, version, serial, memMax, memSlots',
		mem: 'total, used, free, active, buffers, cached available swaptotal swapused swapfree',
		memLayout:
			'size, bank, type, ecc, clockSpeed, formFactor, manufacture, serialNum, voltageConfigured',
		osInfo:
			'platform, distro, kernel, codename, hostname, arch, fqdn, logofile, codepage, uefi',
		versions: 'kernel, node, npm, mongodb, bash, zsh, git, v8',
		diskLayout:
			'device, type, name, size, vendor, smartData, smartStatus, interfaceType',
		fsSize: 'fs, type, size, used, available, mount',
		networkInterfaces: 'ifaceName, iface, ip4, ip4subnet, mac, dhcp, speed'
	};

	try {
		if (!standardSystemView || !extendedSystemView) {
			throw new Error('Something went wrong!');
		} else {
			const dataStandard = await si.get(standardSystemView);
			const dataExtended = await si.get(extendedSystemView);

			return { dataStandard, dataExtended };
		}
	} catch (err) {
		if (err) {
			console.error(err.message);
		}
	}
};

// printSysInfo().then(res => console.log(res));

module.exports = {
	printSysInfo
};
