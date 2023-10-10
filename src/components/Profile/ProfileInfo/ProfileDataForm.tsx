import React from "react";
import s from './ProfileInfo.module.css'
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormControls/FormsControls";
import {ContactsType, GetProfileResponseType} from "../../../redux/profileReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import styles from "../../common/FormControls/FormsControls.module.css";
import {Button, Checkbox, FormControl} from "@material-ui/core";

export type ProfileDataForm = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataForm>> = ({handleSubmit, error}) => {
    const profile = useSelector<AppStateType, GetProfileResponseType>(state => state.profilePage.profile)
    return (
        <form style={{marginTop: "10px"}} onSubmit={handleSubmit}>
            <FormControl className={styles.formContainer}>
                <div>
                    <b>Full name</b>:{createField('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <div><b>Looking for a job:</b> <Checkbox name={"lookingForAJob"} /></div>
                </div>
                <div>
                    <b>My professional
                        skills</b>:{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
                <div>
                    <b>About me</b>:
                    {createField('About me', 'aboutMe', [], Textarea)}
                </div>
                <div>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key =>
                    <div key={key} className={s.contact}>
                        <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                )}
                </div>
                {error && <div className={styles.summaryError}>
                    {error}
                </div>}
                <div>
                    <Button type={"submit"} variant="outlined" color="primary"
                            style={{marginTop : "10px"}}>Save</Button>
                </div>
            </FormControl>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileDataForm>({form: 'profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm