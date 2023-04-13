

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


type  PostDataType = {
    id: number
    message: string
    likesCount: number
}


let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It s my firs post', likesCount: 11},

    ] as PostDataType[] ,
    newPostText: ''

}
export type InitialStateProfileType=typeof initialState
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


            return  {
                ...state,
                newPostText:action.newText
            };
        }
        default:
            return state
    }

}



type TsarPropsType=AddPostActionCreatorType|UpdateNewPostActionCreatorType
type AddPostActionCreatorType=ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionCreatorType=ReturnType<typeof updateNewPostActionCreator>
export let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export let updateNewPostActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
