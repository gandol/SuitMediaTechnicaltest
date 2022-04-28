import {
    SelectedUserDataType,
    UserDataType,
} from "../../util/type/SelectedUserDataType";
import {createAction, createReducer} from "@reduxjs/toolkit";
import {RootState} from "../index";

const initialState: UserDataType = {
    name: "",
    selected: null,
};

export const getUserName = (state: RootState) => state.UserState.name;
export const getSelectedUser = (state: RootState) => state.UserState.selected;

export const setUserName = createAction("SET_USER_NAME", (name: string) => ({
    payload: {name},
}));

export const setSelectedUser = createAction(
    "SET_SELECTED_USER",
    (selected: SelectedUserDataType) => ({
        payload: {selected},
    }),
);

const UserStateReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUserName, (state, action) => {
            state.name = action.payload.name;
        })
        .addCase(setSelectedUser, (state, action) => {
            state.selected = action.payload.selected;
        });
});
export default UserStateReducer;
