import { IDBPDatabase, openDB } from "idb"
import { legacy_createStore as createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

import * as info from "./dev_info";
import * as types from "./types";

export const reducer = (state: JSON, action : any) => {
	switch (action) {
		case types.actionType.RECEIVED :
			return info.cardData.data
	}
	return state
}
