let rerenderEntireTree=(state:AppType)=>{

}

export type AppType = {
        dialogsPage: dialogsPageType
        profilePage: profilePageType


}
export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}

export type profilePageType = {
    postData:Array<PostDataType>
    newPostText:string
}


export type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number

}
let state:AppType = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It s my firs post', likesCount: 11},

        ],
        newPostText: ''
    },

    dialogsPage: {
        messages: [
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How your it-kamasutra?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
            {id: 1, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    }


}
 export let addPost = (postMessage:string) => {
    let newPost:PostDataType = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost)
     state.profilePage.newPostText='';
     rerenderEntireTree(state)
}

export let updateNewPostText = (newText:string) => {
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}
export default state