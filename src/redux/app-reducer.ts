import {authThunk} from "./auth-reducer";


const initialState = {
    initialized: false,
    error: null as string | null,
}

export type InitialAuthStateType = typeof initialState

export const appReducer = (state: InitialAuthStateType = initialState, action: TsarPropsType2): InitialAuthStateType => {
    switch (action.type) {
        case  'app/SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            };
        case 'app/SET_APP_ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }

}


type TsarPropsType2 = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccess> | ReturnType<typeof setAppError>
export const initializedSuccess = () => {
    return {type: 'app/SET_INITIALIZED'} as const
}
export const setAppError = (error: string | null) => {
    return {
        type: 'app/SET_APP_ERROR',
        payload: {error}
    } as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        }).catch((e: any) => {
        dispatch(setAppError(e.message))
    })
}




