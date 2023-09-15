import React from 'react';
import ty from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {GetProfileResponseType} from "../../redux/profileReducer";





type ProfileType={
    profile:GetProfileResponseType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(file:File)=>void


}

function Profile(props:ProfileType) {

    return (
        <div className={ty.content}>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>


        </div>
    )
}

export default Profile