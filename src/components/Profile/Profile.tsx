import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";


export type ProfileType = {
    postData: Array<PostDataType>
}


function Profile(props: ProfileType) {

    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>

        </div>
    )
}

export default Profile