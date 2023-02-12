import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";


function MyPosts() {
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea><br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post name={"Hello World"}/>
                <Post name={"Hello Nikita"}/>

            </div>



        </div>

    )
}

export default MyPosts