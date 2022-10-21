export const DBConfig = {
	name: 'DataBase',
	version: 1,
	objectStoresMeta: [
		{
			store: 'devices',
			storeConfig: { keyPath: 'id', autoIncrement: true },
			storeSchema: [
				{ name: 'name', keypath: 'name', options: { unique: false } },
				{ name: 'deviceID', keypath: 'deviceID', options: { unique: false } }
			]
		}
	]
};