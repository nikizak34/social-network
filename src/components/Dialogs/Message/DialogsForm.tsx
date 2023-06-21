import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators";
/*type DialogsFormType={
    newMessageBody:string
    onNewMessageChange:(e: ChangeEvent<HTMLTextAreaElement>)=>void
    onSendMessageClick:()=>void
}
export const DialogsForm:React.FC<DialogsFormType> = ({newMessageBody,onNewMessageChange,onSendMessageClick}) => {
    return (
        <div>
            <form >
                <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                               placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>enter</button>
                </div>
            </form>
        </div>
    );
};*/

export type FormDataType = {
    newMessageBody: string
}

const maxLength50=maxLengthCreator(50)
export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={'Enter your message'} validate={[required,maxLength50]} name={'newMessageBody'} component={Textarea}/>
                </div>
                <div>
                    <button>enter</button>
                </div>
            </form>
    );
};


export const DialogReduxForm = reduxForm<FormDataType>({form: 'dialog'})(DialogsForm)

