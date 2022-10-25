import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface User {
    userName: string;
};

const initialData:User = {
    userName: "User"
}

export const userController = createSlice({
    name: "user",
    initialState: initialData,
    reducers: {
        update_user: (state, action: PayloadAction<User>) => {
            state.userName = action.payload.userName;
        }
    }
});

export const {
    update_user
} = userController.actions;

// Instant type access
export const user_name = (state: AppState) => state.user.userName // For store

export const userReducer = userController.reducer;
