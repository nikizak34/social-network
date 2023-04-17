import React from "react";
import {

    InitialStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType={
    dialogsPage:InitialStateType
    isAuth:boolean


}

type MapDispatchToProps={
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

export type DialogPropsType=MapDispatchToProps&MapStateToPropsType


let mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onNewMessageChange:(body:string)=>{
            dispatch(updateNewMessageBodyCreator(body))
        },
        onSendMessageClick:()=>{
            dispatch(sendMessageCreator())
        }


    }
}

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);




/*type DialogsType = {
    store:StoreType
}
export const DialogsContainer = (props: DialogsType) => {

    let state=props.store.getState().dialogsPage;

    const onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange=(body:string)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }



    return <Dialogs dialogsPage={state}
                    onSendMessageClick={onSendMessageClick}
                    onNewMessageChange={onNewMessageChange}

    />


}*/
