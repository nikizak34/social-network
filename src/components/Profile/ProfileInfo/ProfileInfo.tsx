import React, {ChangeEvent, FC, useState} from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ContactsType, GetProfileResponseType} from "../../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/1200px-User_font_awesome.svg.png";
import ProfileDataFormReduxForm from "./ProfileDataForm";




type ProfileInfoType = {
    profile: GetProfileResponseType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile:(value:SubmitForm)=>Promise<void>
}

export type SubmitForm={
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts:ContactsType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)
    if (!props.profile.photos) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            if (e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        }
    }
    const onSubmit = (formData:SubmitForm) => {
        props.saveProfile(formData).then(()=>{
            setEditMode(false)
        })

    }





    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.image} src={props.profile.photos.large || userPhoto} alt="error"/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                {editMode
                    ?
                    < ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={props.profile}/>
                    :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={()=>setEditMode(true)}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}

type ProfileData = {
    profile: GetProfileResponseType
    isOwner: boolean
    goToEditMode: (value:any) => void
}
const ProfileData: FC<ProfileData> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b>:{profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>:{profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>My professional skills</b>:{profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me</b>:{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key =>

            <Contact contactTitle={key} key={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        )}
        </div>
    </div>
}




type Contact = {
    contactTitle: string
    contactValue: string
}
export const Contact: FC<Contact> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
    )
}