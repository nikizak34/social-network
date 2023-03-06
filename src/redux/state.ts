
export type AppType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType


}
export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>

}

export type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
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

export type StoreType={
    _state:AppType
    getState:()=>AppType
    _rerenderEntireTree:(state:AppType)=>void
    addPost:(postText:string)=>void
    updateNewPostText:(newText: string)=>void
    subscribe:(observer:(state:AppType)=>void)=>void

}


 const store:StoreType ={
     _state: {
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


},
     getState () {
         return this._state;
     },
    _rerenderEntireTree (state: AppType){
    },
     addPost(postText:string) {
        let newPost: PostDataType = {
            id: 5,
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText=''
        this._rerenderEntireTree(this._state)
    },
     updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree(this._state)
    },

     subscribe(observer){
        this._rerenderEntireTree=observer
    }


}










export default store

