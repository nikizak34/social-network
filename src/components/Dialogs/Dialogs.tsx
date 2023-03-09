import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import  {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import {StoreType} from "../../redux/state";



type DialogsType = {
    store:StoreType



}
export const Dialogs = (props: DialogsType) => {
    let state=props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)

    let messagesElements =state.messages.map(el => <Message message={el.message}/>)
    let newMessageBody =state.newMessageBody

    const onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange=(e: ChangeEvent<HTMLTextAreaElement>)=>{
       let body= e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }



    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>enter</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
