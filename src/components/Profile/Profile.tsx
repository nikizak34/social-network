import React from 'react';
import {ProfileInfo, SubmitForm} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {GetProfileResponseType} from "../../redux/profileReducer";
import {Paper} from "@material-ui/core";


type ProfileType = {
    profile: GetProfileResponseType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile:(value:SubmitForm)=>Promise<void>
}

function Profile(props: ProfileType) {

    return (
        <Paper style={{width : "100%", padding : "15px", backgroundColor : "aliceblue"}}>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                         profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </Paper>


    )
}

export default Profile