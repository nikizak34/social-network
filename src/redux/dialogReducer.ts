
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type MessageType = {
    message: string
    id: number
}

export type DialogType = {
    name: string
    id: number
}
const initialState = {
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How your it-kamasutra?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'}

    ] as MessageType[],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as DialogType[],
    newMessageBody: ''
}

export type InitialStateType=typeof initialState
export const dialogReducer = (state: InitialStateType = initialState, action: TsarPropsType): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:


            return  {
                ...state,
                newMessageBody:action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody

            return   {
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id: 6, message: body}]
            };
        default:
            return state
    }
}


type TsarPropsType=SendMessageCreatorType|UpdateNewMessageBodyCreatorType
type SendMessageCreatorType=ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyCreatorType=ReturnType<typeof updateNewMessageBodyCreator>
export let sendMessageCreator = () => {
    return {
        type: 'SEND_MESSAGE',
    } as const
}
export let updateNewMessageBodyCreator = (text: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: text
    } as const
}