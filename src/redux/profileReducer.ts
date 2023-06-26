import {profileApi, userApi} from "../api/api";
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type PhotoType = {
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
    status: ''

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
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
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

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>

type SetUserProfileACType = ReturnType<typeof setUserProfile>
type SetStatusACType = ReturnType<typeof setStatus>


export let addPostActionCreator = (newPostText:string) => {
    return {type: 'ADD-POST', newPostText} as const
}
export const setUserProfile = (profile: GetProfileResponseType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}


export const profileThunk = (userId: string) => {
    return (dispatch: any) => {
        userApi.getProfile(userId)
            .then(response => {

                dispatch(setUserProfile(response.data))
            })
    }
}


export const getStatus = (userId: string) => {
    return (dispatch: any) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}


export const updateStatus = (status: string) => {
    return (dispatch: any) => {
        profileApi.updateStatus(status)
            .then(response => {
                debugger
                if(response.data.resultCode===0){
                    dispatch(setStatus(status))
                }

            })
    }
}