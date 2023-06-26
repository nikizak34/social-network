import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostPropsType} from "./MyPostsContainer";
import {PostFormDataType, PostReduxForm} from "./Post/MyPostForm";


function MyPosts(props: PostPropsType) {

    let postElement = props.posts.postData.map(el => <Post key={el.id} message={el.message}
                                                           likesCount={el.likesCount}/>)

    let onAddPost = (values:PostFormDataType) => {
        props.addPost(values.newPostText)

    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>

                {postElement}


            </div>


        </div>

    )
}

export default MyPosts