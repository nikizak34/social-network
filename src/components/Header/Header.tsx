import React from 'react';
import la from "./Header.module.css"
import {NavLink} from "react-router-dom";


type HeaderPropsType={
    isAuth:boolean
    login:string|null
}
function Header(props:HeaderPropsType) {
    return (
        <header className={la.header}>
            <img src="https://img.artlebedev.ru/everything/kazan/kazan.png" alt="error"/>
            <div className={la.loginBlock} >
                {props.isAuth?props.login
                :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header