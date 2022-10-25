import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { userReducer} from "../slices/user";
import { devicesReducer } from "../slices/devices";

// Primary storage
export const appStore = configureStore({
    reducer: {
        user: userReducer,
        devices: devicesReducer
    },
    middleware: (getDefaultMiddleware) => 
                getDefaultMiddleware()
                    //.prepend();
});

// My types for redux
export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

// For instant getter'n'setters
export const useAppDispach: () =>  AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
