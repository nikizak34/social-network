import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/1200px-User_font_awesome.svg.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";



type UsersPropsType = {
    follow: (userId:number) => void
    unFollow: (userId:number) => void
    pageSize: number
    currentPage: number
    totalUsersCount: number
    users: UserType[]
    onClickHandler: (pageNumber: number) => void
    toggleFollowingProgress:(followingInProgress:boolean,userId:number)=>void
    followingInProgress:number[]

}
export const Users = (props: UsersPropsType) => {
 debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} onClick={() => {
                        props.onClickHandler(p)
                    }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}

            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                      <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                           style={{height: '80px'}}
                                           alt="error"/>
                                </NavLink>

                            </div>
                            <div>
                                {
                                    el.followed
                                        ? <button disabled={props.followingInProgress.some(id=>id===el.id)}

                                                  onClick={() => {props.unFollow(el.id)}}>unFollow</button>

                                        : <button  disabled={props.followingInProgress.some(id=>id===el.id)}

                                                   onClick={() => {props.follow(el.id)}}>Follow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                  <div>{'el.location.city'}</div><div>{'el.location.country'}</div>
                            </span>
                        </span>

                    </div>
                )
            }
        </div>
    );
};

