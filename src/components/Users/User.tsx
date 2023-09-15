import React from 'react';
import userPhoto from "../../assets/images/1200px-User_font_awesome.svg.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


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
            <div key={props.user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + props.user.id}>
                                      <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                                           style={{height: '80px'}}
                                           alt="error"/>
                                </NavLink>

                            </div>
                            <div>
                                {
                                    props.user.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === props.user.id)}

                                                  onClick={() => {
                                                      props.unFollow(props.user.id)
                                                  }}>unFollow</button>

                                        : <button disabled={props.followingInProgress.some(id => id === props.user.id)}

                                                  onClick={() => {
                                                      props.follow(props.user.id)
                                                  }}>Follow</button>
                                }

                            </div>
                        </span>
                <span>
                            <span>
                                <div>{props.user.name}</div>
                                <div>{props.user.status}</div>
                            </span>
                            <span>
                                  <div>{'el.location.city'}</div><div>{'el.location.country'}</div>
                            </span>
                        </span>

            </div>
        </div>
    );
};

