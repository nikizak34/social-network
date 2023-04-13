import React from 'react';
import axios from "axios";
import userPhoto from '../../assets/images/1200px-User_font_awesome.svg.png'
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'


export class User extends React.Component<UsersPropsType> {
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
        let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages=[];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map((p,index)=> {
                        return <span key={index} onClick={()=>{this.onClickHandler(p)}} className={this.props.currentPage === p ? s.selectedPage:''}>{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(el =>
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
                                            this.props.unFollow(el.id)
                                        }}>Follow</button>
                                        : <button onClick={() => {
                                            this.props.follow(el.id)
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
        )
    }
}


/*
export const User = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            {
                props.usersPage.users.map(el =>
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
*/

