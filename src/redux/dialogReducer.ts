import {ActionsTypes} from "./state";

const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE='SEND_MESSAGE'

export const dialogReducer = (state: any, action: ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            break;
    }
    return state
}


export let sendMessageCreator=()=>{
    return {
        type:'SEND_MESSAGE',
    } as const
}
export let updateNewMessageBodyCreator=(text:string)=>{
    return {
        type:'UPDATE_NEW_MESSAGE_BODY',
        body:text
    } as const
}