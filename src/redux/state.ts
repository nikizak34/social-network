
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
    _callSubscriber:(state:AppType)=>void
    subscribe:(observer:(state:AppType)=>void)=>void
    dispatch:(action:ActionsTypes)=>void


}
export type ActionsTypes =AddPostActionType| ChangePostActionType
type AddPostActionType={
    type:'ADD-POST'

}
type ChangePostActionType={
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
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
    _callSubscriber (state: AppType){
    },

     subscribe(observer){
        this._callSubscriber=observer
    },
     dispatch(action){
         if(action.type==='ADD-POST'){
             let newPost: PostDataType = {
                 id: 5,
                 message: this._state.profilePage.newPostText,
                 likesCount: 0
             }
             this._state.profilePage.postData.push(newPost)
             this._state.profilePage.newPostText=''
             this._callSubscriber(this._state)

         }else if (action.type==='UPDATE-NEW-POST-TEXT'){
             this._state.profilePage.newPostText = action.newText
             this._callSubscriber(this._state)

         }
     },


}










export default store

