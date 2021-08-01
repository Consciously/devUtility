const si = require('systeminformation');

const standardSystemView = {
	cpu: 'manufacturer, brand, speed, cors',
	system: 'manufacturer, model, version',
	mem: 'total, used, free',
	osInfo: 'platform, distro, kernel',
	diskLayout: 'device, type, name size',
	networkInterfaces: 'ifaceName, iface, ip4, ip4subnet'
};

const printSysInfo = async () => {
	try {
		if (!standardSystemView) {
			throw new Error('Something went wrong!');
		} else {
			const data = await si.get(standardSystemView);
			return data;
		}
	} catch (err) {
		if (err) {
			console.error(err.message);
		}
	}
};

module.exports = {
	printSysInfo
};
