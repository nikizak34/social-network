const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS='SET-USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'


export type UserType={
    id:number
    followed:boolean
    name:string
    status:null
    photos:PhotosType
    uniqueUrlName:null

}
type PhotosType={
    small:null
    large:null
}

export type initialStateType={
    users:UserType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

const initialState:initialStateType = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:2

}

export const userReducer = (state: initialStateType = initialState, action: TsarPropsType):initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(el=>el.id===action.userId?{...el,followed:true} :el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(el=>el.id===action.userId?{...el,followed:false} :el)
            }
        case SET_USERS:
            return {...state,users:action.users}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount:action.totalCount}

        default:
            return state


    }
}

type TsarPropsType=FollowPropType|UnFollowPropType|setUsersACType|setCurrentPageACType|setTotalUsersCountType

type FollowPropType=ReturnType<typeof followAC>
type setTotalUsersCountType=ReturnType<typeof setTotalUsersCountAC>
type UnFollowPropType=ReturnType<typeof unFollowAC>
type setUsersACType=ReturnType<typeof setUsersAC>
type setCurrentPageACType=ReturnType<typeof setCurrentPageAC>
export const followAC = (userId:number) => ({type: FOLLOW,userId}as const)
export const unFollowAC = (userId:number) => ({type: UNFOLLOW,userId}as const)
export const setUsersAC = (users:UserType[]) => ({type: SET_USERS,users}as const)
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE,currentPage}as const)
export const setTotalUsersCountAC = (totalCount:number) => ({type: SET_TOTAL_USERS_COUNT,totalCount}as const)
