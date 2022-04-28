import {createAction, createReducer} from "@reduxjs/toolkit";
import {UserDataType} from "../../util/type/UserReponseType";
import {RootState} from "../index";

const initialStae: UserDataType[] = [];

export const getUserList = (props: RootState) => {
    return props.UserList;
};

export const setUserList = createAction(
    "SET_USER_LIST",
    (userList: UserDataType[]) => ({
        payload: userList,
    }),
);

export const addUserInList = createAction(
    "ADD_USER_IN_LIST",
    (user: UserDataType) => ({
        payload: user,
    }),
);

export const resetUserList = createAction("RESET_USER_LIST");

const UserListReducer = createReducer(initialStae, builder => {
    builder.addCase(setUserList, (state, action) => {
        return action.payload;
    });
    builder.addCase(addUserInList, (state, action) => {
        const newUser = action.payload;
        //check if user already exist
        const userIndex = state.findIndex(user => user.id === newUser.id);
        if (userIndex === -1) {
            state.push(newUser);
        }
    });
    builder.addCase(resetUserList, () => {
        return initialStae;
    });
});

export default UserListReducer;
