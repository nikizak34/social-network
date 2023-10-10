import userPhoto from "../../../assets/images/1200px-User_font_awesome.svg.png";
import React from "react";
import classes from "./Message.module.css"

export type MessageType = {
    message: string
    userId:number
}
export const Message = (props: MessageType) => {
    return (
        <div className={classes.message + ' ' + ((props.userId === 1) ? classes.leftaling : classes.rightaling)}>
            <img src={userPhoto} className={classes.messageAv} alt="avatar"/>
            <div className={classes.userName}> {props.message} </div>
        </div>

    )
}