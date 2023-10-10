import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'
import {MenuList, Paper} from "@material-ui/core";

function Navbar() {
    return (
        <Paper style={{padding: "15px", backgroundColor: "aliceblue", height: "250px", marginBottom: "30px"}}>
            <MenuList>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
            </MenuList>
        </Paper>
    )
}

export default Navbar