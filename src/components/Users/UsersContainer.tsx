import React from 'react';
import {connect} from "react-redux";
import {
    follow,
     getUsersThunkCreator,
    initialStateType, setCurrentPage, toggleFollowingProgress, unFollow,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export type MapStateToPropsType = initialStateType
type MapDispatchToPropsType = {
    follow: (userId:number) => void
    unFollow: (userId:number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress


    }
}


/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching:(isFetching:boolean)=>{
            dispatch(setIsFetchingAC(isFetching))
        }

    }
}*/

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onClickHandler = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props} onClickHandler={this.onClickHandler}


                />
            </>
        )
    }
}

export default connect(mapStateToProps,
    {
        follow, unFollow,
        setCurrentPage,
        toggleFollowingProgress, getUsersThunkCreator
    })(UsersContainer);


