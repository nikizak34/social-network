import {userApi} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'user/FOLLOW'
const UNFOLLOW = 'user/UNFOLLOW'
const SET_USERS = 'user/SET-USERS'
const SET_CURRENT_PAGE = 'user/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'user/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'user/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'user/TOGGLE_IS_FOLLOWING_PROGRESS'


export type UserType = {
    id: number
    followed: boolean
    name: string
    status: null
    photos: PhotosType
    uniqueUrlName: null

}
type PhotosType = {
    small: null
    large: null
}

export type initialStateType = typeof initialState

const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[]

}

export const userReducer = (state: initialStateType = initialState, action: TsarPropsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state


    }
}

type TsarPropsType = FollowPropType | UnFollowPropType | setUsersACType
    | setCurrentPageACType | setTotalUsersCountType | setIsFetchingType
    | toggleFollowingProgressType

type FollowPropType = ReturnType<typeof followSuccess>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type UnFollowPropType = ReturnType<typeof unFollowSuccess>
type setUsersACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unFollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress, userId
} as const)

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    let data = await userApi.getUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage))
    dispatch(setIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}


export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, AC: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(AC(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const unFollow = (userId: number) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, userApi.unFollow.bind(userApi), unFollowSuccess)
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userId, userApi.follow.bind(userApi), followSuccess)
}
