import React from "react";
import classes from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import {MenuItem} from "@material-ui/core";
import userPhoto from "../../../assets/images/1200px-User_font_awesome.svg.png";

export type DialogItemType = {
    name: string
    id: number

}
export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <MenuItem className={classes.dialogItem}>
            <img src={userPhoto} className={classes.avatar} alt="avatar"/>
            <NavLink to={path} className={classes.userName}>{props.name}</NavLink>
        </MenuItem>

    )
}


