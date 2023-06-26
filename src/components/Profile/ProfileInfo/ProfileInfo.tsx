import React from "react";
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {GetProfileResponseType} from "../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type ProfileInfoType={
    profile:GetProfileResponseType
    status:string
    updateStatus:(status:string)=>void
}
export const ProfileInfo = (props:ProfileInfoType) => {
    if(!props.profile.photos){
        return <Preloader/>
    }
    return (
        <div>
            <img
                src="https://upload.wikimedia.org/wikipedia/ru/6/66/%D0%9A%D1%80%D0%B5%D0%BC%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%B5%D0%BD%D0%B0%D1%8F_1.jpg"
                alt="error"/>
            <div className={s.descriptionBlock}>
                <img className={s.image} src={props.profile.photos.large}  alt="error"/>
                <ProfileStatusWithHooks  status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.instagram}</div>
            </div>
        </div>

    )
}