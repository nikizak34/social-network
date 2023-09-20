import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsConteiner";
import {DialogReduxForm} from "./Message/DialogsForm";


export const Dialogs = (props: DialogPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)

    let addNewMessage = (values:{newMessageBody:string}) => {
        props.onSendMessageClick(values.newMessageBody)
    }

    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={addNewMessage}/>

            </div>

        </div>
    )
}
