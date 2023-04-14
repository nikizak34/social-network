const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'


type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType={
    facebook: string
    website: string
    vk:string
    twitter:string
    instagram:string
    youtube:string
    github:string
    mainLink:string
}

type PhotoType={
    small:string|undefined
    large:string|undefined
}
export type GetProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob:boolean
    lookingForAJobDescription:string
    fullName:string
    userId:number
    photos:PhotoType
}


const initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It s my firs post', likesCount: 11},

    ] as PostDataType[],
    newPostText: '',
    profile: {}as GetProfileResponseType ,

}
export type InitialStateProfileType = typeof initialState
export const profileReducer = (state: InitialStateProfileType = initialState, action: TsarPropsType): InitialStateProfileType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state
    }

}


type TsarPropsType =
    AddPostActionCreatorType
    | UpdateNewPostActionCreatorType
    | SetUserProfileACType

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionCreatorType = ReturnType<typeof updateNewPostActionCreator>
type SetUserProfileACType = ReturnType<typeof setUserProfile>
export let addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewPostActionCreator = (text: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text} as const
}
export const setUserProfile = (profile: GetProfileResponseType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
