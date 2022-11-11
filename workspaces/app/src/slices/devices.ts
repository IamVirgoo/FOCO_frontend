import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "../stores/appStore"

export default interface Device {
    deviceName : string,
    deviceID : number,
};


export interface Devices {
    values: Array<Device>
}

const initialData : Devices = {
    values: [
        {
            deviceName : "device-1",
            deviceID : 1
        },
        {
            deviceName : "device-2",
            deviceID : 2
        },
        {
            deviceName : "device-3",
            deviceID : 3
        },
    ]
}

export const deviceController = createSlice({
    name : "device",
    initialState : initialData,
    reducers : {
        append_device: (state, action: PayloadAction<Device>) => {
            state.values.push(action.payload);
        },            
    }
});

export const {
    append_device
} = deviceController.actions;

export const device_list = (state: AppState) => state.devices.values;

export const devicesReducer = deviceController.reducer;