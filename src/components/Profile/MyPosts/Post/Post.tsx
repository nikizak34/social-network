import React from 'react';
import classes from './Post.module.css'
import {Paper} from "@material-ui/core";
import userPhoto from "./../../../../assets/images/1200px-User_font_awesome.svg.png"

type PostPropsType = {
    message: string
    likesCount: number

}

function Post({message, likesCount}: PostPropsType) {
    return (

        <Paper style={{marginTop: "20px", padding: "15px", backgroundColor: "aliceblue"}}>
            <img className={classes.avatar} src={userPhoto}
                 alt="avatar"/>
            <p>{message}</p>
            <span>{`❤️ ${likesCount}`}</span>
        </Paper>
    )
}

export default Post