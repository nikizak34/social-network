import {addPostActionCreator,  updateNewPostActionCreator} from "./profileReducer";
import { sendMessageCreator, updateNewMessageBodyCreator} from "./dialogReducer";


 type AppType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sidebar:{}

}
 type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody:string
}

type profilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}


 type  PostDataType = {
    id: number
    message: string
    likesCount: number
}
 type MessageType = {
    message: string
    id: number
}

 type DialogType = {
    name: string
    id: number
}

 type StoreType={
    _state:AppType
    getState:()=>AppType
    _callSubscriber:(state:AppType)=>void
    subscribe:(observer:(state:AppType)=>void)=>void
    dispatch:(action:ActionsTypes)=>void
}


 type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostActionCreator>|
    ReturnType<typeof sendMessageCreator> |
    ReturnType<typeof updateNewMessageBodyCreator >


/* const store:StoreType ={
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
        newMessageBody:''
    },
    sidebar:{}


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
         this._state.profilePage=profileReducer(this._state.profilePage,action)
         this._state.dialogsPage=dialogReducer(this._state.dialogsPage,action)
         this._state.sidebar=sidebarReducer(this._state.sidebar,action)

         this._callSubscriber(this._state)

     }



}*/












/*
export default store*/

