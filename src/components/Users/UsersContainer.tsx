import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    initialStateType, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, toggleFollowingProgress, unFollow,

    UserType,
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

export type MapStateToPropsType = initialStateType
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(followingInProgress:boolean,userId:number)=>void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        users: state.usersPage.users,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress


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
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
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
        follow, unFollow, setUsers,
        setCurrentPage, setTotalUsersCount, setIsFetching,
        toggleFollowingProgress
    })(UsersContainer);


