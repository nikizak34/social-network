import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators";
import {Textarea} from "../../../common/FormControls/FormsControls";

export type PostFormDataType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)
export const MyPostForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter your message'} name={'newPostText'}
                   component={Textarea}
                   validate={[required, maxLength10]}

            />
            <br/>
            <button >Add post</button>
        </form>
    );
};


export const PostReduxForm = reduxForm<PostFormDataType>({form: 'post'})(MyPostForm)