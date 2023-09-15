import {authThunk} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'

const initialState = {
    initialized: false
}

export type InitialAuthStateType = typeof initialState

export const appReducer = (state: InitialAuthStateType = initialState, action: TsarPropsType2): InitialAuthStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state
    }

}


type TsarPropsType2 = initializedSuccessType

type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {type: SET_INITIALIZED} as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}




