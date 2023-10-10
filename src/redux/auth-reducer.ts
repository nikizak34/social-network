import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {AnyAction, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {setAppError} from "./app-reducer";


const SET_USER_DATA = 'auth/SET_USER_DATA'

type InitialAuthStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    captchaUrl: null | string,
    error: string | null
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as string | null,
    error: null as string | null,
}


export const authReducer = (state: InitialAuthStateType = initialState, action: TsarPropsType2): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.data.userId,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth,

            };
        case 'auth/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                captchaUrl: action.captchaURL
            };
        default:
            return state
    }

}


type TsarPropsType2 = SetUserDataType | getCaptchaUrlSuccessAC

type SetUserDataType = ReturnType<typeof setUserData>
type getCaptchaUrlSuccessAC = ReturnType<typeof getCaptchaUrlSuccess>
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}} as const
}
export const getCaptchaUrlSuccess = (captchaURL: string | null) => {
    return {type: 'auth/GET-CAPTCHA-URL-SUCCESS', captchaURL} as const
}

export const authThunk = () => async (dispatch: Dispatch) => {
    return await authApi.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserData(id, email, login, true))

            }
        }).catch((e: any) => {
            dispatch(setAppError(e.message))
        })
}


export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => async (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {

    try {
        const data = {
            email,
            password,
            rememberMe,
            captcha
        }

        let response = await authApi.login(data)

        if (response.data.resultCode === 0) {
            dispatch(authThunk())
            dispatch(getCaptchaUrlSuccess(null))
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let res = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: res}))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message));
    }

}


export const logOut = () => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.logOut()
        if (res.data.resultCode === 0) dispatch(setUserData(null, null, null, false))
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}


export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    try {
        const res = await securityApi.getCaptchaUrl()
        dispatch(getCaptchaUrlSuccess(res.data.url))

    } catch (e: any) {
        dispatch(setAppError(e.message))
    }


}