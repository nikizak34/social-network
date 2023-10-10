import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormsControls";
import {Button} from "@material-ui/core";

export type PostFormDataType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)
export const MyPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your message'} name={'newPostText'}
                   component={Textarea}
                   validate={[maxLength10]}
            />
            <br/>
            <Button type={'submit'}
                    variant={"outlined"}
                    color={"primary"}
                    style={{margin: "10px 0"}}>Add your post
            </Button>
        </form>
    );
};


export const PostReduxForm = reduxForm<PostFormDataType>({form: 'post'})(MyPostForm)