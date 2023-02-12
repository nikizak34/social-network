import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    )
}

export default Profile