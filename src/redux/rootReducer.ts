import {combineReducers} from "@reduxjs/toolkit";
import UserStateReducer from "./state/UserState";
import UserListReducer from "./state/UserListState";

const rootReducer = combineReducers({
    UserState: UserStateReducer,
    UserList: UserListReducer,
});

export default rootReducer;
