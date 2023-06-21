import React from 'react';
import la from "./Header.module.css"
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logOut: () => any
}
function Header(props: HeaderPropsType) {
    return (
        <header className={la.header}>
            <img src="https://img.artlebedev.ru/everything/kazan/kazan.png" alt="error"/>
            <div className={la.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logOut}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>

        </header>
    )
}

export default Header