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
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/users-selectors";


export type MapStateToPropsType = initialStateType
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        users: getUsers(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)


    }
}

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


