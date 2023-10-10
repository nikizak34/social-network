import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators";
import {Button} from "@material-ui/core";


export type FormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)
export const DialogsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} style={{padding : "15px"}}>
            <div>
                <Field placeholder={'Type your message here...'}
                       validate={[maxLength50]}
                       name={'newMessageBody'}
                       component={Textarea}
                       style={{
                           width : "calc(100% - 20px)",
                           maxWidth : "calc(100% - 20px)",
                           padding : "10px",
                           maxHeight : "70px",
                           marginBottom : "10px"
                       }}/>
            </div>
            <div style={{textAlign : "right"}}>
                <Button type={"submit"} variant={"outlined"} color={"primary"}>Send your message</Button>
            </div>

        </form>
    );
};


export const DialogReduxForm = reduxForm<FormDataType>({form: 'dialog'})(DialogsForm)

