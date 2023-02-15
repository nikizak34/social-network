import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../App";

type myPostsType = {
    postData: Array<PostDataType>
}

function MyPosts(props: myPostsType) {

    let postElement = props.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea><br/>
                <button>Add post</button>
            </div>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts