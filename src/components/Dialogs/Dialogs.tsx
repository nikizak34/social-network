import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsConteiner";
import {DialogReduxForm} from "./Message/DialogsForm";
import {Grid, MenuList, Paper, Typography} from "@material-ui/core";


export const Dialogs = (props: DialogPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} userId={el.id} message={el.message}/>)

    let addNewMessage = (values:{newMessageBody:string}) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (
        <Paper style={{width : "100%", paddingBottom : "20px", height : "650px"}}>
            <Grid container style={{padding : "15px", height : "100%"}} spacing={2}>
                <Grid item xs={4}>
                    <Paper style={{height : "100%", padding : "15px", overflow : "auto", marginBottom : "20px"}}>
                        <MenuList>
                            {dialogsElements}
                        </MenuList>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.dialogsContainer}>
                        <div>
                            <Typography variant={"h4"} className={classes.dialogName}>Dimych</Typography>
                            <div>
                                {messagesElements}
                            </div>
                        </div>
                        <Paper>
                            <DialogReduxForm onSubmit={addNewMessage}/>
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}
