import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/state";



export type ProfileType = {
    profilePage:profilePageType
    dispatch:(action:ActionsTypes)=>void
}


function Profile(props: ProfileType) {

    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}


            />

        </div>
    )
}

export default Profile