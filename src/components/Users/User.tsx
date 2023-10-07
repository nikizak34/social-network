import React from 'react';
import userPhoto from "../../assets/images/1200px-User_font_awesome.svg.png";
import styles from "./User.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";


type UserPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    pageSize: number
    user: UserType
    followingInProgress: number[]

}
export const User = (props: UserPropsType) => {
    return (
        <div>
            <div className={styles.userContainer} key={props.user.id}>
                <div className={styles.avatarContainer}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={styles.avatar}
                             alt="userAvatar"/>
                    </NavLink>
                        {
                            props.user.followed
                                ? <Button variant={"outlined"} color={"secondary"}
                                          disabled={props.followingInProgress.some(id => id === props.user.id)}

                                          onClick={() => {
                                              props.unFollow(props.user.id)
                                          }} className={styles.followButton}>unFollow</Button>

                                : <Button variant={"outlined"} color={"primary"}
                                          disabled={props.followingInProgress.some(id => id === props.user.id)}

                                          onClick={() => {
                                              props.follow(props.user.id)
                                          }} className={styles.followButton}>Follow</Button>
                        }
                </div>
                <div className={styles.userInfoContainer}>
                            <div className={styles.userNameContainer}>
                                <span className={styles.name}>{props.user.name}</span>
                                <span className={styles.status}>{props.user.status}</span>
                            </div>

                </div>

            </div>
        </div>
    );
};

