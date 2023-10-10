const SEND_MESSAGE = 'dialog/SEND_MESSAGE'


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
        {id: 2, message: 'Can you help me?'},
        {id: 3, message: 'How your it-kamasutra?'},
        {id: 4, message: 'Sure! What\'s the problem?'},


    ] as MessageType[],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ] as DialogType[],

}

export type InitialStateType = typeof initialState
export const dialogReducer = (state: InitialStateType = initialState, action: TsarPropsType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}


type TsarPropsType = SendMessageCreatorType
type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>

export let sendMessageCreator = (newMessageBody: string) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    } as const
}
