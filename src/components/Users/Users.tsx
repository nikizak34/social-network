import React from 'react';
import {UserType} from "../../redux/usersReducer";
import {Paginator} from "./Paginator";
import {User} from "./User";


type UsersPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: UserType[]
    onClickHandler: (pageNumber: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    followingInProgress: number[]

}
export const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onClickHandler={props.onClickHandler}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       portionSize={10}
            />
            {
                props.users.map(el =>
                    <User follow={props.follow} unFollow={props.unFollow}
                          pageSize={props.pageSize} user={el} followingInProgress={props.followingInProgress}
                    />
                )
            }
        </div>
    );
};

