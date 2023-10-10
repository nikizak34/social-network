import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {userReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";


const reducer=combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogReducer,
    usersPage:userReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
})

export type AppStateType=ReturnType<typeof reducer>
export const store=createStore(reducer,applyMiddleware(thunkMiddleware));


