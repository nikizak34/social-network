import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number

}
const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>

    )
}

type MesageType = {
    message: string
}
const Message = (props: MesageType) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>{props.message}</div>
        </div>

    )
}
export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]
    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesData = [
        {id: 2, massage: 'Hi'},
        {id: 3, massage: 'How your it-kamasutra?'},
        {id: 4, massage: 'Yo'},
        {id: 5, massage: 'Yo'},
        {id: 6, massage: 'Yo'},
        {id: 1, massage: 'Yo'},
    ]

    let messagesElement=messagesData.map(el=> <Message message={el.massage}/>)

    return (


        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}


            </div>
            <div className={s.messages}>

                {messagesElement}

            </div>

        </div>
    )
}