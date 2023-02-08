import React from 'react';
import ty from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {
    return (

        <div>My posts
            <div>
                New post
            </div>

            <Post name={"Hello World"}/>
            <Post name={"Hello Nikita"}/>


        </div>

    )
}

export default MyPosts