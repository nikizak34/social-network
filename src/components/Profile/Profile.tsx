import React from 'react';
import ty from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";






function Profile() {

    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile