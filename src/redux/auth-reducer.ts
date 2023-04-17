import {authApi, userApi} from "../api/api";
import {setUserProfile} from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA'

type InitialAuthStateType = {
    userId: null|string,
    email: null|string,
    login: null|string,
    isAuth:boolean
}

const initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth:false
}


/*type InitialAuthStateType=typeof initialState*/
export const authReducer = (state: InitialAuthStateType = initialState, action: TsarPropsType2): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            };

        default:
            return state
    }

}


type TsarPropsType2 = SetUserDataType

type SetUserDataType = ReturnType<typeof setUserData>
export const setUserData = (userId: string, email: string, login: string) => {
    return {type: SET_USER_DATA, data: {userId, email, login}} as const
}

export const authThunk=()=> {
    return (dispatch:any) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode===0){
                    let {id,login,email}=response.data.data
                    dispatch(setUserData(id,email, login))
                }
            })
    }
}
