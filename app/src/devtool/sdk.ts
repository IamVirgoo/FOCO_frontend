import { IDBPDatabase, openDB } from "idb"
import {legacy_createStore as createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit";

// backend -> service-worker -> indexedDb -> onupdate -> redux

import * as info from "./dev_info";
import * as types from "./types";

export const reducer = (state: JSON, action : any) => {
	switch (action) {
		case types.actionType.RECEIVED :
			return info.cardData.data
	}
	return state
}

/*const dbPromise = openDB('database', 1, {
	upgrade(db) {
		db.createObjectStore('stats');
	},
});*/

const DataBase = (name: string, tableName: string) =>
	openDB(name, 1, {
		upgrade(db) {
			db.createObjectStore(tableName);
		}
	})

export async function get(database : any, key : any, tableName : string) {
	return (await database).get(tableName, key);
}
export async function add(database : any, key : any, val : object, tableName : string) {
	return await database.put(key, val, tableName);
}
export async function del(database : any, key : any, tableName : string) {
	return (await database).delete(tableName, key);
}
export async function clear(database : any, tableName : string) {
	return (await database).clear(tableName);
}
export async function keys(database : any, tableName : string) {
	return (await database).getAllKeys(tableName);
}

/*
async function fetch(DBName : string, DBTableName : string, Data : any) {
	await DataBase(DBName, DBTableName);
	await add(DBName, "device", Data, DBTableName);
}

await fetch("DB", 'device', info.cardData)
*/
