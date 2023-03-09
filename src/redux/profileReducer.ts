import {ActionsTypes, PostDataType} from "./state";
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
const ADD_POST='ADD-POST'

export const profileReducer=(state:any,action:ActionsTypes)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
}

export let addPostActionCreator=()=>{
    return {
        type:'ADD-POST'
    }as const
}

export let updateNewPostActionCreator=(text:string)=>{
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    } as const
}
