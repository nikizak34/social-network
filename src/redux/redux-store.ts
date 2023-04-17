import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import  thunkMiddleware from 'redux-thunk'



let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer,
    auth:authReducer
})

export type AppStateType=ReturnType<typeof reducers>
export const store=createStore(reducers,applyMiddleware(thunkMiddleware));


