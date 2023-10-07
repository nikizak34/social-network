import React from 'react';
import {UserType} from "../../redux/usersReducer";
import styles from "./Users.module.css";
import {Paginator} from "./Paginator";
import {User} from "./User";
import {Paper} from "@material-ui/core";
import Preloader from "../common/Preloader/Preloader";


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
    isFetching: boolean

}
export const Users = (props: UsersPropsType) => {

    return (
        <Paper className={styles.usersContainer}>
            <div className={styles.paginatorContainer}>

                <Paginator currentPage={props.currentPage} onClickHandler={props.onClickHandler}
                           totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           portionSize={10}
                />
            </div>
            <div>
                {props.isFetching ? <Preloader/> : null}
                {
                    props.users.map(el =>
                        <User follow={props.follow} unFollow={props.unFollow}
                              pageSize={props.pageSize} user={el} followingInProgress={props.followingInProgress}
                        />
                    )
                }
            </div>
        </Paper>
    );
};

