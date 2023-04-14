const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS='SET-USERS'
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING'


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

export type initialStateType=typeof initialState

const initialState = {
    users: [] as UserType[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:true


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
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching:action.isFetching}

        default:
            return state


    }
}

type TsarPropsType=FollowPropType|UnFollowPropType|setUsersACType|setCurrentPageACType|setTotalUsersCountType|setIsFetchingType

type FollowPropType=ReturnType<typeof follow>
type setTotalUsersCountType=ReturnType<typeof setTotalUsersCount>
type UnFollowPropType=ReturnType<typeof unFollow>
type setUsersACType=ReturnType<typeof setUsers>
type setCurrentPageACType=ReturnType<typeof setCurrentPage>
type setIsFetchingType=ReturnType<typeof setIsFetching>
export const follow = (userId:number) => ({type: FOLLOW,userId}as const)
export const unFollow = (userId:number) => ({type: UNFOLLOW,userId}as const)
export const setUsers = (users:UserType[]) => ({type: SET_USERS,users}as const)
export const setCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE,currentPage}as const)
export const setTotalUsersCount = (totalCount:number) => ({type: SET_TOTAL_USERS_COUNT,totalCount}as const)
export const setIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING,isFetching}as const)

