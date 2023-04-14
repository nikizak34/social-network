import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/1200px-User_font_awesome.svg.png";
import {UserType} from "../../redux/usersReducer";



type UsersPropsType={
    follow:(userId:number)=>void
    unFollow: (userId: number) =>void
    pageSize:number
    currentPage:number
    totalUsersCount:number
    users:UserType[]
    onClickHandler:(pageNumber:number)=>void

}
export const Users = (props:UsersPropsType) => {
    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize)
    let pages=[];
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p,index)=> {
                    return <span key={index} onClick={()=>{props.onClickHandler(p)}} className={props.currentPage === p ? s.selectedPage:''}>{p}</span>
                })}

            </div>
            {
                props.users.map(el =>
                    <div key={el.id}>
                        <span>
                            <div>
                                <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                     style={{height: '80px'}}
                                     alt="error"/>
                            </div>
                            <div>
                                {
                                    el.followed
                                        ? <button onClick={() => {
                                            props.unFollow(el.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            props.follow(el.id)
                                        }}>unFollow</button>
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

