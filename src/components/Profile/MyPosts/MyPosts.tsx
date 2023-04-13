import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";





function MyPosts(props: PostPropsType) {

    let postElement = props.posts.postData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)

    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText.newPostText}
                          onChange={onPostChange}>

                </textarea><br/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts