import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";

export type MapStateToPropsType ={
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

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onClickHandler=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   onClickHandler={this.onClickHandler}


            />
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


