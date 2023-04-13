import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./usersReducer";



let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer
})

export type AppStateType=ReturnType<typeof reducers>
export const store=createStore(reducers);


