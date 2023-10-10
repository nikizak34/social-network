import {profileApi, userApi} from "../api/api";
import {AnyAction, Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {setAppError} from "./app-reducer";

const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'


export type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotoType = {
    small: string | undefined
    large: string | undefined
}
export type GetProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}


const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It s my firs post', likesCount: 11},

    ] as PostDataType[],
    profile: {} as GetProfileResponseType,
    status: '' as string,
    newPostText: '' as string,


}
export type InitialStateProfileType = typeof initialState
export const profileReducer = (state: InitialStateProfileType = initialState, action: TsarPropsType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostDataType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postData: [...state.postData, newPost],

            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'profile/SET-STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        case 'profile/SAVE-PHOTO': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            };
        }
        default:
            return state
    }

}


type TsarPropsType =
    AddPostActionCreatorType
    | SetUserProfileACType
    | SetStatusACType
    | SavePhotoSuccessAC

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type SetUserProfileACType = ReturnType<typeof setUserProfile>
type SetStatusACType = ReturnType<typeof setStatus>
type SavePhotoSuccessAC = ReturnType<typeof savePhotoSuccess>


export let addPostActionCreator = (newPostText: string) => {
    return {type: ADD_POST, newPostText} as const
}
export const setUserProfile = (profile: GetProfileResponseType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setStatus = (status: string) => {
    return {type: 'profile/SET-STATUS', status} as const
}
export const savePhotoSuccess = (photo: PhotoType) => {
    return {type: 'profile/SAVE-PHOTO', photo} as const
}


export const profileThunk = (userId: number) => async (dispatch: Dispatch) => {
    try {
        let response = await userApi.getProfile(userId)
        dispatch(setUserProfile(response.data))
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}


export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    try {
        let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response.data))
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}


export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileApi.updateStatus(status)
        const {resultCode} = res.data;
        if (resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}
export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    try {
        const res = await profileApi.updatePhoto(photo)
        const {resultCode} = res.data;
        if (resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos))
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}
export const saveProfile = (profile: GetProfileResponseType) => async (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>, getState: () => AppStateType) => {
    try {
        const userId = getState().auth.userId
        const res = await profileApi.saveProfile(profile)
        const {resultCode} = res.data;
        if (resultCode === 0) {
            if (userId !== null) {
                dispatch(profileThunk(userId))
            }
        } else {
            dispatch(stopSubmit('profile', {_error: res.data.messages[0]}))
            return Promise.reject(res.data.messages[0])
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}
