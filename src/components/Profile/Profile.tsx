import React from 'react';
import ty from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";



export type ProfileType = {
    postData: Array<PostDataType>
    addPost:(postMessage:string)=>void
}


function Profile(props: ProfileType) {

    return (
        <div className={ty.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}
                     addPost={props.addPost}

            />

        </div>
    )
}

export default Profile