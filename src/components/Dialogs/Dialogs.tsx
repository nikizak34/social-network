import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType} from "./DialogsConteiner";




export const Dialogs = (props: DialogPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)
    let messagesElements = props.dialogsPage.messages.map(el => <Message key={el.id} message={el.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.onNewMessageChange(body)

    }


    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>enter</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
