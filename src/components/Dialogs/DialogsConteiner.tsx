import React from "react";
import {

    InitialStateType,
    sendMessageCreator,
} from "../../redux/dialogReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {FormDataType} from "./Message/DialogsForm";


type MapStateToPropsType={
    dialogsPage:InitialStateType

}

type MapDispatchToProps={
    onSendMessageClick: (values:FormDataType) => void
    onNewMessageChange: (body: string) => void
}

export type DialogPropsType=MapDispatchToProps&MapStateToPropsType


let mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,

    }
}

let mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        onSendMessageClick:(newMessageBody:string)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }


    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)





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
