import React, {ChangeEvent, FC} from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {GetProfileResponseType} from "../../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/1200px-User_font_awesome.svg.png";


type ProfileInfoType = {
    profile: GetProfileResponseType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
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


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.image} src={props.profile.photos.large || userPhoto} alt="error"/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileData profile={props.profile}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.instagram}</div>
            </div>
        </div>

    )
}

type ProfileData = {
    profile: GetProfileResponseType
}
const ProfileData: FC<ProfileData> = ({profile}) => {
    return <div>
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
            // @ts-ignore
            <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]}/>
        )}
        </div>
    </div>
}


type Contact = {
    contactTitle: any
    contactValue: any
}
export const Contact: FC<Contact> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
    )
}