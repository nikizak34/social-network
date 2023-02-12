import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string

}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}

type MesageType={
    message:string
}
const Message=(props:MesageType)=>{
    return(
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>

    )
}
export const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How your it-kamasutra?'/>
                <Message message='Yo'/>
            </div>

        </div>
    )
}