import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";



type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>


}
export const Dialogs = (props: DialogsType) => {


    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements = props.messages.map(el => <Message message={el.message}/>)

    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>

        </div>
    )
}