import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {User } from "./User";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType ={
    pageSize:number
    currentPage:number
    totalUsersCount:number
    users:UserType[]

}
type MapDispatchToPropsType ={
    follow:(userId:number)=>void
    unFollow: (userId: number) =>void
    setUsers: (users: UserType[]) =>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type UsersPropsType=MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        users:state.usersPage.users


    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);


