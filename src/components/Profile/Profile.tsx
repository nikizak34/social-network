import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { profilePageType} from "../../redux/state";



export type ProfileType = {
    profilePage:profilePageType
    addPost:(postText: string)=>void
    updateNewPostText:(newText:string)=>void
}


function Profile(props: ProfileType) {

    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}


            />

        </div>
    )
}

export default Profile