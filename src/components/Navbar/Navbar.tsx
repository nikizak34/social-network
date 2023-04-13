import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return <nav className={s.navbar}>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink } to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink activeClassName={s.activeLink } to='/users'>Users</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar