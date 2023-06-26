import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {initializedSuccess} from "./app-reducer";


const SET_USER_DATA = 'SET_USER_DATA'

type InitialAuthStateType = {
    userId: null | string,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


/*type InitialAuthStateType=typeof initialState*/
export const authReducer = (state: InitialAuthStateType = initialState, action: TsarPropsType2): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };

        default:
            return state
    }

}


type TsarPropsType2 = SetUserDataType

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}} as const
}

export const authThunk = () => {
    return (dispatch: Dispatch) => {
      return   authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    const data = {
        email,
        password,
        rememberMe
    }
    authApi.login(data)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                let res = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: res}))
            }
        })
}


export const logOut = () => (dispatch: any) => {
    authApi.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

